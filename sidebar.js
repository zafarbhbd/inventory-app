// =============================================
//  sidebar.js — injects sidebar into every page
// =============================================

function buildSidebar(activePage) {
  const u = window.currentUser || {};
  const isAdmin = u.role === 'admin';

  const html = `
  <div class="sidebar">
    <div class="s-brand">
      <div class="s-brand-name">Students <span>Point</span></div>
      <div class="s-brand-sub">Accounting & Inventory</div>
    </div>
    <div class="s-user-bar">
      <div class="s-user-info">👤 <b id="sidebarUser">${u.name||'—'}</b></div>
      <div class="s-user-info" style="margin-top:2px;font-size:11px;color:#475569">${u.role||''}</div>
      <button class="signout-btn" onclick="doLogout()">🚪 Sign Out</button>
    </div>

    <div class="nav">
      <div class="nav-sec">Overview</div>
      <a href="dashboard.html"><div class="nav-item ${activePage==='dashboard'?'active':''}" data-page="dashboard">
        <span class="ni">📊</span>Dashboard</div></a>

      <div class="nav-sec">Records</div>
      <a href="records.html"><div class="nav-item ${activePage==='records'?'active':''}" data-page="records">
        <span class="ni">🗂️</span>Products / Vendors / Customers</div></a>

      <div class="nav-sec">Transactions</div>
      <a href="transactions.html"><div class="nav-item ${activePage==='transactions'?'active':''}" data-page="transactions">
        <span class="ni">💳</span>Purchase & Sales Entry</div></a>
      <a href="transactions.html#service"><div class="nav-item ${activePage==='service'?'active':''}" data-page="service">
        <span class="ni">🛎️</span>Service Revenue</div></a>
      <a href="transactions.html#opex"><div class="nav-item ${activePage==='opex'?'active':''}" data-page="opex">
        <span class="ni">💸</span>Operating Expenses</div></a>

      <div class="nav-sec">Stock</div>
      <a href="inventory.html"><div class="nav-item ${activePage==='inventory'?'active':''}" data-page="inventory">
        <span class="ni">🗄️</span>Inventory</div></a>

      <div class="nav-sec">Personal Accounts</div>
      <a href="accounts.html#ar"><div class="nav-item ${activePage==='ar'?'active':''}" data-page="ar">
        <span class="ni">📥</span>Accounts Receivable</div></a>
      <a href="accounts.html#ap"><div class="nav-item ${activePage==='ap'?'active':''}" data-page="ap">
        <span class="ni">📤</span>Accounts Payable</div></a>

      <div class="nav-sec">Balance Sheet Items</div>
      <a href="balance-sheet-items.html"><div class="nav-item ${activePage==='bsitems'?'active':''}" data-page="bsitems">
        <span class="ni">🏛️</span>Assets / Liabilities / Equity</div></a>

      <div class="nav-sec">Finance</div>
      <a href="ledger.html"><div class="nav-item ${activePage==='ledger'?'active':''}" data-page="ledger">
        <span class="ni">⚖️</span>Balance Ledger</div></a>
      <a href="cash.html"><div class="nav-item ${activePage==='cash'?'active':''}" data-page="cash">
        <span class="ni">💵</span>Cash Book</div></a>

      <div class="nav-sec">Financial Statements</div>
      <a href="statements.html#income"><div class="nav-item ${activePage==='income'?'active':''}" data-page="income">
        <span class="ni">📃</span>Income Statement</div></a>
      <a href="statements.html#balance"><div class="nav-item ${activePage==='balance'?'active':''}" data-page="balance">
        <span class="ni">📊</span>Balance Sheet</div></a>

      ${isAdmin ? `<div class="nav-sec">Admin</div>
      <a href="users.html"><div class="nav-item ${activePage==='users'?'active':''}" data-page="users" id="usersNav">
        <span class="ni">🔐</span>Manage Users</div></a>` : ''}
    </div>

    <div class="s-footer">
      <div class="sync-row">
        <span class="sync-dot" id="syncDot"></span>
        <span class="sync-status" id="syncStatus">Connected</span>
      </div>
      <button class="footer-btn" onclick="exportData()">📥 Export to Excel</button>
      <button class="footer-btn" onclick="backupData()">💾 Backup Data</button>
      <label class="footer-btn" style="cursor:pointer">📂 Restore
        <input type="file" accept=".json" style="display:none" onchange="restoreData(event)">
      </label>
      <button class="footer-btn" onclick="window.print()">🖨️ Print</button>
    </div>
  </div>`;

  const target = document.getElementById('sidebar-root');
  if (target) target.innerHTML = html;
}

// ─── EXPORT ──────────────────────────────────
function exportData() {
  const inv = getInvMap();
  let csv = '';
  const sheets = {
    Products:  { h:['HSN','Name','Cost','Price'], r:(window.DB.products||[]).map(p=>[p.hsn,p.name,p.cost,p.price]) },
    Vendors:   { h:['HSN','Product','Vendor','Phone','Address'], r:(window.DB.vendors||[]).map(v=>[v.hsn,v.product,v.name,v.phone,v.address]) },
    Customers: { h:['ID','Name','Email','Phone','Address'], r:(window.DB.customers||[]).map(c=>[c.custId,c.name,c.email,c.phone,c.address]) },
    Purchases: { h:['HSN','Product','Vendor','Date','Units','Cost','Amount','Paid'], r:(window.DB.purchases||[]).map(p=>[p.hsn,p.product,p.vendor,p.date,p.units,p.cost,p.amount,p.paid]) },
    Sales:     { h:['Customer','HSN','Product','Date','Units','Price','Amount','Paid'], r:(window.DB.sales||[]).map(s=>[s.customer,s.hsn,s.product,s.date,s.units,s.price,s.amount,s.paid]) },
    ServiceRev:{ h:['Date','Name','Description','Amount'], r:(window.DB.serviceRevenue||[]).map(s=>[s.date,s.name,s.description,s.amount]) },
    OpExpenses:{ h:['Date','Name','Category','Amount'], r:(window.DB.opExpenses||[]).map(e=>[e.date,e.name,e.category,e.amount]) },
    Assets:    { h:['Asset ID','Name','Balance'], r:(window.DB.assets||[]).map(a=>[a.assetId,a.name,a.balance]) },
    Liabilities:{ h:['Liability ID','Name','Balance'], r:(window.DB.liabilities||[]).map(l=>[l.liabilityId,l.name,l.balance]) },
    Equity:    { h:['Equity ID','Name','Balance'], r:(window.DB.equity||[]).map(e=>[e.equityId,e.name,e.balance]) },
    Inventory: { h:['HSN','Product','Cost','Purchased','Sold','Stock','StockValue'], r:Object.entries(inv).map(([k,i])=>[k,i.name,i.cost,i.purchased,i.sold,i.stock,i.stockAmt]) },
    CashBook:  { h:['Date','Type','Category','Amount','Note'], r:(window.DB.cash||[]).map(e=>[e.date,e.type,e.category,e.amount,e.note]) },
  };
  Object.entries(sheets).forEach(([name,s])=>{
    csv+='\n=== '+name+' ===\n'+s.h.join(',')+'\n';
    s.r.forEach(r=>{ csv+=r.map(v=>'"'+String(v||'').replace(/"/g,'""')+'"').join(',')+'\n'; });
  });
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));
  a.download='StudentsPoint_'+today()+'.csv'; a.click();
  showToast('Exported successfully');
}

function backupData() {
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([JSON.stringify(window.DB,null,2)],{type:'application/json'}));
  a.download='SP_Backup_'+today()+'.json'; a.click();
  showToast('Backup downloaded');
}

function restoreData(e) {
  const file=e.target.files[0]; if(!file) return;
  const r=new FileReader();
  r.onload=async ev=>{
    try {
      const data=JSON.parse(ev.target.result);
      if(!data.products) { showToast('Invalid backup file','err'); return; }
      window.DB=data;
      await saveDB(); showToast('Backup restored'); location.reload();
    } catch { showToast('Could not read file','err'); }
  };
  r.readAsText(file);
}
