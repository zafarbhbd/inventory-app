// =============================================
//  InvenTrack — app.js
// =============================================

// ─────────────────────────────────────
//  SEED DATA
// ─────────────────────────────────────
const SEED = {
  users: [
    { id: 'u1', name: 'Administrator', username: 'admin',   password: 'admin123',   role: 'admin'   },
    { id: 'u2', name: 'Manager',       username: 'manager', password: 'manager123', role: 'manager' },
    { id: 'u3', name: 'Staff Member',  username: 'staff',   password: 'staff123',   role: 'staff'   },
  ],
  products: [
    { id: 'p1',  hsn: 'N1001', name: 'Smart Watch',        cost: 980,   price: 1176   },
    { id: 'p2',  hsn: 'N1002', name: 'Laptop HP xyz i5',   cost: 34500, price: 41400  },
    { id: 'p3',  hsn: 'N1003', name: 'Wireless Printer',   cost: 4600,  price: 5520   },
    { id: 'p4',  hsn: 'N1004', name: 'Desktop',            cost: 21000, price: 25200  },
    { id: 'p5',  hsn: 'N1005', name: 'Mouse',              cost: 200,   price: 240    },
    { id: 'p6',  hsn: 'N1006', name: 'Rgb Keyboard',       cost: 340,   price: 408    },
    { id: 'p7',  hsn: 'N1007', name: 'Camera',             cost: 52000, price: 62400  },
    { id: 'p8',  hsn: 'N1008', name: 'Headphones',         cost: 799,   price: 958.8  },
    { id: 'p9',  hsn: 'N1009', name: 'Speakers',           cost: 670,   price: 804    },
    { id: 'p10', hsn: 'N1010', name: 'Tablets',            cost: 23500, price: 28200  },
  ],
  vendors: [
    { id: 'v1',  hsn: 'N1001', product: 'Smart Watch',       name: 'Tech99',     phone: '9812xxxxxx', address: 'Faridabad, 121101' },
    { id: 'v2',  hsn: 'N1002', product: 'Laptop HP xyz i5',  name: 'Tech99',     phone: '9812xxxxxx', address: 'Faridabad, 121102' },
    { id: 'v3',  hsn: 'N1003', product: 'Wireless Printer',  name: 'Tech99',     phone: '9812xxxxxx', address: 'Faridabad, 121103' },
    { id: 'v4',  hsn: 'N1004', product: 'Desktop',           name: 'GG Traders', phone: '9813xxxxxx', address: 'Gurgaon, Sec-15'   },
    { id: 'v5',  hsn: 'N1005', product: 'Mouse',             name: 'GG Traders', phone: '9813xxxxxx', address: 'Gurgaon, Sec-16'   },
    { id: 'v6',  hsn: 'N1006', product: 'Rgb Keyboard',      name: 'GG Traders', phone: '9813xxxxxx', address: 'Gurgaon, Sec-17'   },
    { id: 'v7',  hsn: 'N1007', product: 'Camera',            name: 'GG Traders', phone: '9813xxxxxx', address: 'Gurgaon, Sec-18'   },
    { id: 'v8',  hsn: 'N1008', product: 'Headphones',        name: 'Compac',     phone: '9814xxxxxx', address: 'New Delhi, 110012'  },
    { id: 'v9',  hsn: 'N1009', product: 'Speakers',          name: 'Compac',     phone: '9814xxxxxx', address: 'New Delhi, 110013'  },
    { id: 'v10', hsn: 'N1010', product: 'Tablets',           name: 'Compac',     phone: '9814xxxxxx', address: 'New Delhi, 110014'  },
  ],
  customers: [
    { id: 'c1', custId: '100', name: 'Ram Sales',    email: 'Ram@gmail.com', address: 'Delhi, India'          },
    { id: 'c2', custId: '101', name: 'Atul Ltd.',    email: 'Atu@gmail.com', address: '121102, Palwal, HR'     },
    { id: 'c3', custId: '102', name: 'MK Tech.',     email: 'MK@gmail.com',  address: 'Faridabad, 121101'      },
    { id: 'c4', custId: '103', name: '99store',      email: '99s@gmail.com', address: 'Agra, UP'               },
    { id: 'c5', custId: '104', name: 'Rajesh Kumar', email: 'Raj@gmail.com', address: 'New Delhi, 110011'      },
    { id: 'c6', custId: '105', name: 'Amit',         email: 'Ami@gmail.com', address: 'Gurgaon, Sec-15'        },
    { id: 'c7', custId: '106', name: 'Jain Tel.',    email: 'Jai@gmail.com', address: 'Janpath, New Delhi'     },
  ],
  purchases: [
    { id: 'pu1',  hsn: 'N1005', product: 'Mouse',           vendor: 'GG Traders', date: '2024-01-01', units: 20,  cost: 200,   amount: 4000    },
    { id: 'pu2',  hsn: 'N1008', product: 'Headphones',      vendor: 'Compac',     date: '2024-01-02', units: 10,  cost: 799,   amount: 7990    },
    { id: 'pu3',  hsn: 'N1006', product: 'Rgb Keyboard',    vendor: 'GG Traders', date: '2024-01-03', units: 50,  cost: 340,   amount: 17000   },
    { id: 'pu4',  hsn: 'N1004', product: 'Desktop',         vendor: 'GG Traders', date: '2024-01-04', units: 100, cost: 21000, amount: 2100000 },
    { id: 'pu5',  hsn: 'N1007', product: 'Camera',          vendor: 'GG Traders', date: '2024-01-05', units: 20,  cost: 52000, amount: 1040000 },
    { id: 'pu6',  hsn: 'N1001', product: 'Smart Watch',     vendor: 'Tech99',     date: '2024-01-06', units: 40,  cost: 980,   amount: 39200   },
    { id: 'pu7',  hsn: 'N1002', product: 'Laptop HP xyz i5',vendor: 'Tech99',     date: '2024-01-07', units: 30,  cost: 34500, amount: 1035000 },
    { id: 'pu8',  hsn: 'N1003', product: 'Wireless Printer',vendor: 'Tech99',     date: '2024-01-08', units: 40,  cost: 4600,  amount: 184000  },
    { id: 'pu9',  hsn: 'N1009', product: 'Speakers',        vendor: 'Compac',     date: '2024-01-09', units: 55,  cost: 670,   amount: 36850   },
    { id: 'pu10', hsn: 'N1010', product: 'Tablets',         vendor: 'Compac',     date: '2024-01-10', units: 40,  cost: 23500, amount: 940000  },
    { id: 'pu11', hsn: 'N1008', product: 'Headphones',      vendor: 'Compac',     date: '2024-01-10', units: 35,  cost: 799,   amount: 27965   },
    { id: 'pu12', hsn: 'N1007', product: 'Camera',          vendor: 'GG Traders', date: '2024-01-10', units: 2,   cost: 52000, amount: 104000  },
    { id: 'pu13', hsn: 'N1008', product: 'Headphones',      vendor: 'Compac',     date: '2024-01-10', units: 10,  cost: 799,   amount: 7990    },
  ],
  sales: [
    { id: 's1',  custId: '103', customer: '99store',      hsn: 'N1008', product: 'Headphones',      date: '2024-01-01', units: 10, price: 958.8,  amount: 9588     },
    { id: 's2',  custId: '104', customer: 'Rajesh Kumar', hsn: 'N1006', product: 'Rgb Keyboard',    date: '2024-01-02', units: 37, price: 408,    amount: 15096    },
    { id: 's3',  custId: '101', customer: 'Atul Ltd.',    hsn: 'N1004', product: 'Desktop',         date: '2024-01-03', units: 10, price: 25200,  amount: 252000   },
    { id: 's4',  custId: '100', customer: 'Ram Sales',    hsn: 'N1008', product: 'Headphones',      date: '2024-01-04', units: 32, price: 958.8,  amount: 30681.6  },
    { id: 's5',  custId: '102', customer: 'MK Tech.',     hsn: 'N1002', product: 'Laptop HP xyz i5',date: '2024-01-05', units: 14, price: 41400,  amount: 579600   },
    { id: 's6',  custId: '103', customer: '99store',      hsn: 'N1004', product: 'Desktop',         date: '2024-01-06', units: 55, price: 25200,  amount: 1386000  },
    { id: 's7',  custId: '105', customer: 'Amit',         hsn: 'N1010', product: 'Tablets',         date: '2024-01-07', units: 8,  price: 28200,  amount: 225600   },
    { id: 's8',  custId: '106', customer: 'Jain Tel.',    hsn: 'N1009', product: 'Speakers',        date: '2024-01-08', units: 52, price: 804,    amount: 41808    },
    { id: 's9',  custId: '104', customer: 'Rajesh Kumar', hsn: 'N1010', product: 'Tablets',         date: '2024-01-08', units: 4,  price: 28200,  amount: 112800   },
    { id: 's10', custId: '103', customer: '99store',      hsn: 'N1001', product: 'Smart Watch',     date: '2024-01-08', units: 37, price: 1176,   amount: 43512    },
    { id: 's11', custId: '104', customer: 'Rajesh Kumar', hsn: 'N1007', product: 'Camera',          date: '2024-01-08', units: 4,  price: 62400,  amount: 249600   },
    { id: 's12', custId: '105', customer: 'Amit',         hsn: 'N1007', product: 'Camera',          date: '2024-01-08', units: 4,  price: 62400,  amount: 249600   },
    { id: 's13', custId: '104', customer: 'Rajesh Kumar', hsn: 'N1003', product: 'Wireless Printer',date: '2024-01-08', units: 5,  price: 5520,   amount: 27600    },
  ],
  // ─── BALANCE LEDGER ───
  // type: 'owe'   = My store owes them → adds to my payable balance
  // type: 'owed'  = They owe my store   → subtracts from my payable balance
  // settled: true = cleared / paid off
  ledger: [],
};

// ─────────────────────────────────────
//  STATE
// ─────────────────────────────────────
let DB = {};
let currentUser = null;

// ─────────────────────────────────────
//  LOADER
// ─────────────────────────────────────
function showLoader(msg) {
  let el = document.getElementById('globalLoader');
  if (!el) {
    el = document.createElement('div');
    el.id = 'globalLoader';
    el.style.cssText = 'position:fixed;inset:0;background:#0d0f14ee;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Syne,sans-serif;';
    el.innerHTML = `<div style="font-size:28px;font-weight:800;color:#f0c040;margin-bottom:12px">InvenTrack</div>
      <div id="loaderMsg" style="color:#8b90a0;font-size:14px"></div>
      <div style="margin-top:20px;width:40px;height:40px;border:3px solid #2a2f3d;border-top-color:#f0c040;border-radius:50%;animation:spin .8s linear infinite"></div>`;
    document.body.appendChild(el);
  }
  document.getElementById('loaderMsg').textContent = msg || 'Loading…';
  el.style.display = 'flex';
}
function hideLoader() { const el = document.getElementById('globalLoader'); if (el) el.style.display = 'none'; }

// ─────────────────────────────────────
//  FIREBASE PERSISTENCE
// ─────────────────────────────────────
async function loadDB() {
  showLoader('Connecting to Firebase…');
  try {
    const snap = await DOC_REF.get();
    if (snap.exists) {
      DB = snap.data();
      if (!DB.ledger) DB.ledger = []; // migrate old data
    } else {
      showLoader('Setting up database for first time…');
      DB = JSON.parse(JSON.stringify(SEED));
      await DOC_REF.set(DB);
    }
  } catch (e) {
    console.error('Firebase error, using local fallback:', e);
    const local = localStorage.getItem('inventrackLocal');
    DB = local ? JSON.parse(local) : JSON.parse(JSON.stringify(SEED));
    if (!DB.ledger) DB.ledger = [];
  }
  hideLoader();
}

async function saveDB() {
  localStorage.setItem('inventrackLocal', JSON.stringify(DB));
  try {
    await DOC_REF.set(DB);
    setSyncStatus('ok');
  } catch (e) {
    console.error('Firebase save failed:', e);
    setSyncStatus('error');
  }
}

// ─────────────────────────────────────
//  SYNC INDICATOR
// ─────────────────────────────────────
function setSyncStatus(state) {
  const dot = document.getElementById('syncDot');
  const lbl = document.getElementById('syncStatus');
  if (!dot || !lbl) return;
  dot.className = 'sync-dot' + (state === 'syncing' ? ' syncing' : state === 'error' ? ' error' : '');
  lbl.textContent = state === 'syncing' ? 'Saving…' : state === 'error' ? 'Save failed' : 'Saved ✓';
}
const _origSaveDB = saveDB;
window.saveDB = async function () {
  setSyncStatus('syncing');
  try { await _origSaveDB(); setSyncStatus('ok'); }
  catch (e) { setSyncStatus('error'); }
};

// ─────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function fmt(n) { return Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 2 }); }
function today() { return new Date().toISOString().split('T')[0]; }

// ─────────────────────────────────────
//  AUTH
// ─────────────────────────────────────
function doLogin() {
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value;
  if (!DB || !DB.users) { DB = JSON.parse(JSON.stringify(SEED)); }
  const user = DB.users.find(x => x.username === u && x.password === p);
  if (!user) { document.getElementById('loginErr').textContent = '❌ Invalid username or password.'; return; }
  currentUser = user;
  document.getElementById('loginErr').textContent = '';
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('appShell').style.display = 'block';
  document.getElementById('sidebarUser').textContent = user.name + ' (' + user.role + ')';
  document.getElementById('usersNav').style.display = user.role === 'admin' ? 'flex' : 'none';
  renderDashboard();
}
function doLogout() {
  currentUser = null;
  document.getElementById('appShell').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
}
document.getElementById('loginPass').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });

// ─────────────────────────────────────
//  NAVIGATION
// ─────────────────────────────────────
function showPage(id, el) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  if (el) el.classList.add('active');
  ({
    dashboard: renderDashboard,
    products: () => renderProducts(''),
    vendors: () => renderVendors(''),
    customers: () => renderCustomers(''),
    purchase: () => renderPurchase(''),
    sales: () => renderSales(''),
    inventory: renderInventory,
    ledger: () => renderLedger(''),
    users: renderUsers
  })[id]?.();
}

// ─────────────────────────────────────
//  MODALS
// ─────────────────────────────────────
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(o => o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); }));

function openModal(id) {
  if (id === 'productModal') {
    document.getElementById('productModalTitle').textContent = 'Add Product';
    document.getElementById('editProductId').value = '';
    ['pHSN', 'pName', 'pCost', 'pPrice'].forEach(i => document.getElementById(i).value = '');
  }
  if (id === 'vendorModal') {
    document.getElementById('vendorModalTitle').textContent = 'Add Vendor';
    document.getElementById('editVendorId').value = '';
    populateHSN();
    ['vHSN', 'vProduct', 'vName', 'vPhone', 'vAddress'].forEach(i => document.getElementById(i).value = '');
  }
  if (id === 'customerModal') {
    document.getElementById('customerModalTitle').textContent = 'Add Customer';
    document.getElementById('editCustomerId').value = '';
    ['cId', 'cName', 'cEmail', 'cAddress'].forEach(i => document.getElementById(i).value = '');
  }
  if (id === 'purchaseModal') {
    document.getElementById('purchaseModalTitle').textContent = 'New Purchase Entry';
    document.getElementById('editPurchaseId').value = '';
    populateHSN();
    ['puHSN', 'puProduct', 'puVendor', 'puUnits', 'puCost', 'puAmount'].forEach(i => document.getElementById(i).value = '');
    document.getElementById('puDate').value = today();
  }
  if (id === 'salesModal') {
    document.getElementById('salesModalTitle').textContent = 'New Sales Entry';
    document.getElementById('editSaleId').value = '';
    populateHSN();
    ['saCustomer', 'saHSN', 'saProduct', 'saStock', 'saUnits', 'saPrice', 'saAmount'].forEach(i => document.getElementById(i).value = '');
    document.getElementById('saDate').value = today();
  }
  if (id === 'userModal') {
    document.getElementById('userModalTitle').textContent = 'Add User';
    document.getElementById('editUserId').value = '';
    ['uFullName', 'uUsername', 'uPassword'].forEach(i => document.getElementById(i).value = '');
    document.getElementById('uRole').value = 'staff';
  }
  if (id === 'ledgerModal') {
    document.getElementById('ledgerModalTitle').textContent = 'New Balance Entry';
    document.getElementById('editLedgerId').value = '';
    populateLedgerParty();
    ['ledParty', 'ledAmount', 'ledNote'].forEach(i => document.getElementById(i).value = '');
    document.getElementById('ledDate').value = today();
    document.getElementById('ledType').value = 'owe';
    document.getElementById('ledSettled').checked = false;
  }
  document.getElementById(id).classList.add('open');
}

// ─────────────────────────────────────
//  TOAST
// ─────────────────────────────────────
let _toastTimer;
function showToast(msg, type = 'ok') {
  const t = document.getElementById('toast');
  document.getElementById('toastIcon').textContent = type === 'ok' ? '✅' : '❌';
  document.getElementById('toastMsg').textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.add('hidden'), 2600);
}

// ─────────────────────────────────────
//  CONFIRM DELETE
// ─────────────────────────────────────
function confirmDelete(msg, cb) {
  document.getElementById('confirmMsg').textContent = msg;
  document.getElementById('confirmOkBtn').onclick = () => { cb(); closeModal('confirmModal'); };
  document.getElementById('confirmModal').classList.add('open');
}

// ─────────────────────────────────────
//  INVENTORY MAP
// ─────────────────────────────────────
function getInvMap() {
  const m = {};
  DB.products.forEach(p => { m[p.hsn] = { name: p.name, cost: p.cost, purchased: 0, sold: 0 }; });
  DB.purchases.forEach(p => { if (m[p.hsn]) m[p.hsn].purchased += Number(p.units); });
  DB.sales.forEach(s => { if (m[s.hsn]) m[s.hsn].sold += Number(s.units); });
  Object.keys(m).forEach(k => { m[k].stock = m[k].purchased - m[k].sold; m[k].stockAmt = m[k].stock * m[k].cost; });
  return m;
}

// ─────────────────────────────────────
//  BALANCE LEDGER HELPERS
// ─────────────────────────────────────
/**
 * Returns net balance summary:
 *   totalOwe   = total my store owes others (payable)
 *   totalOwed  = total others owe my store  (receivable)
 *   netBalance = totalOwed - totalOwe
 *                positive = net receivable, negative = net payable
 * Also per-party breakdown.
 */
function getBalanceSummary() {
  const active = (DB.ledger || []).filter(e => !e.settled);
  let totalOwe = 0, totalOwed = 0;
  const partyMap = {};
  active.forEach(e => {
    const amt = Number(e.amount);
    if (e.type === 'owe') {
      totalOwe += amt;
      partyMap[e.party] = (partyMap[e.party] || 0) - amt; // negative = we owe them
    } else {
      totalOwed += amt;
      partyMap[e.party] = (partyMap[e.party] || 0) + amt; // positive = they owe us
    }
  });
  return { totalOwe, totalOwed, netBalance: totalOwed - totalOwe, partyMap };
}

// ─────────────────────────────────────
//  DASHBOARD
// ─────────────────────────────────────
function renderDashboard() {
  document.getElementById('dashDate').textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const totPu   = DB.purchases.reduce((a, b) => a + Number(b.amount), 0);
  const totSa   = DB.sales.reduce((a, b)     => a + Number(b.amount), 0);
  const inv     = getInvMap();
  const totStock = Object.values(inv).reduce((a, b) => a + b.stockAmt, 0);
  const pl      = totSa - totPu;
  const bal     = getBalanceSummary();

  document.getElementById('dashCards').innerHTML = `
    <div class="card"><div class="card-lbl">Total Purchase</div><div class="card-val blue">৳${fmt(totPu)}</div></div>
    <div class="card"><div class="card-lbl">Total Sales</div><div class="card-val yellow">৳${fmt(totSa)}</div></div>
    <div class="card"><div class="card-lbl">Profit / Loss</div><div class="card-val ${pl >= 0 ? 'green' : 'red'}">৳${fmt(pl)}</div></div>
    <div class="card"><div class="card-lbl">Stock Value</div><div class="card-val blue">৳${fmt(totStock)}</div></div>
    <div class="balance-card">
      <div class="card-lbl">Net Balance</div>
      <div class="card-val ${bal.netBalance >= 0 ? 'green' : 'red'}">৳${fmt(Math.abs(bal.netBalance))}</div>
      <div class="card-sub">${bal.netBalance >= 0 ? '↑ Net Receivable' : '↓ Net Payable'} &nbsp;·&nbsp; I owe: ৳${fmt(bal.totalOwe)} &nbsp;·&nbsp; Owed to me: ৳${fmt(bal.totalOwed)}</div>
    </div>`;

  // Low stock alerts
  const low  = Object.entries(inv).filter(([, i]) => i.stock <= 5 && i.purchased > 0);
  const vMap = {};
  DB.vendors.forEach(v => vMap[v.hsn] = v.phone);
  const ab = document.getElementById('dashAlerts');
  if (!low.length) {
    ab.style.borderColor = 'var(--success)';
    ab.innerHTML = `<div class="alert-title" style="color:var(--success)">📦 Stock Alerts</div><div class="no-alert">✅ All products have healthy stock levels</div>`;
  } else {
    ab.style.borderColor = 'var(--warning)';
    ab.innerHTML = `<div class="alert-title">⚠️ Low Stock Alerts (${low.length})</div>` +
      low.map(([hsn, i]) => `<div class="alert-row"><div class="alert-dot"></div><span><b>${i.name}</b> — only <b style="color:var(--warning)">${i.stock}</b> units left &nbsp;·&nbsp; Vendor: ${vMap[hsn] || '—'}</span></div>`).join('');
  }

  // Top customers
  const cTot = {};
  DB.sales.forEach(s => { cTot[s.customer] = (cTot[s.customer] || 0) + Number(s.amount); });
  const topC = Object.entries(cTot).sort((a, b) => b[1] - a[1]).slice(0, 5);
  document.getElementById('topCustTable').innerHTML = topC.length
    ? topC.map(([n, a], i) => `<tr><td>${i + 1}. ${n}</td><td><b>৳${fmt(a)}</b></td></tr>`).join('')
    : '<tr class="empty-row"><td colspan="2">No sales data yet</td></tr>';

  // Top products
  const pTot = {};
  DB.sales.forEach(s => { pTot[s.product] = (pTot[s.product] || 0) + Number(s.units); });
  const topP = Object.entries(pTot).sort((a, b) => b[1] - a[1]).slice(0, 5);
  document.getElementById('topProdTable').innerHTML = topP.length
    ? topP.map(([n, u], i) => `<tr><td>${i + 1}. ${n}</td><td><b>${u} units</b></td></tr>`).join('')
    : '<tr class="empty-row"><td colspan="2">No sales data yet</td></tr>';

  // Balance chart
  renderBalanceChart();
}

function renderBalanceChart() {
  const wrap = document.getElementById('balanceChart');
  if (!wrap) return;
  const { partyMap } = getBalanceSummary();
  const entries = Object.entries(partyMap).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1])).slice(0, 8);

  if (!entries.length) {
    wrap.innerHTML = `<div style="text-align:center;color:var(--text3);padding:20px;font-size:13px">No active balance entries — <span style="color:var(--accent);cursor:pointer" onclick="showPage('ledger',document.querySelector('[onclick*=ledger]'))">Add one →</span></div>`;
    return;
  }

  const maxAmt = Math.max(...entries.map(([, v]) => Math.abs(v)));
  wrap.innerHTML = entries.map(([party, val]) => {
    const isOwe = val < 0;
    const abs   = Math.abs(val);
    const pct   = maxAmt > 0 ? Math.round((abs / maxAmt) * 100) : 0;
    const color = isOwe ? 'owe' : 'owed';
    const label = isOwe ? `I owe ৳${fmt(abs)}` : `Owed ৳${fmt(abs)}`;
    return `
      <div class="balance-bar-row">
        <div class="balance-bar-label" title="${party}">${party}</div>
        <div class="balance-bar-track">
          <div class="balance-bar-fill ${color}" style="width:${pct}%">${pct > 20 ? label : ''}</div>
        </div>
        <div class="balance-bar-amt" style="color:${isOwe ? 'var(--danger)' : 'var(--success)'}">${isOwe ? '−' : '+'}৳${fmt(abs)}</div>
      </div>`;
  }).join('');

  const { netBalance } = getBalanceSummary();
  wrap.innerHTML += `
    <div class="net-balance-box">
      <span class="net-balance-label">Net Balance Position</span>
      <span class="net-balance-val" style="color:${netBalance >= 0 ? 'var(--success)' : 'var(--danger)'}">
        ${netBalance >= 0 ? '+ Receivable' : '− Payable'} &nbsp;৳${fmt(Math.abs(netBalance))}
      </span>
    </div>`;
}

// ─────────────────────────────────────
//  PRODUCTS
// ─────────────────────────────────────
function renderProducts(q) {
  const list = DB.products.filter(p => !q || (p.name + p.hsn).toLowerCase().includes(q.toLowerCase()));
  const ro = currentUser?.role === 'staff';
  document.getElementById('productsTable').innerHTML = list.length
    ? list.map(p => `<tr>
        <td><span class="pill pill-blue">${p.hsn}</span></td>
        <td><b>${p.name}</b></td>
        <td>৳${fmt(p.cost)}</td>
        <td>৳${fmt(p.price)}</td>
        <td>${ro ? '<span style="color:var(--text3)">—</span>' : `<div class="act-btns">
          <button class="btn btn-blue btn-sm" onclick='editProduct(${JSON.stringify(p)})'>✏️ Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteProduct('${p.id}','${p.name}')">🗑️</button>
        </div>`}</td></tr>`).join('')
    : '<tr class="empty-row"><td colspan="5">No products found</td></tr>';
}
function editProduct(p) {
  document.getElementById('productModalTitle').textContent = 'Edit Product';
  document.getElementById('editProductId').value = p.id;
  document.getElementById('pHSN').value = p.hsn;
  document.getElementById('pName').value = p.name;
  document.getElementById('pCost').value = p.cost;
  document.getElementById('pPrice').value = p.price;
  document.getElementById('productModal').classList.add('open');
}
function saveProduct() {
  const id = document.getElementById('editProductId').value;
  const o = { hsn: document.getElementById('pHSN').value.trim(), name: document.getElementById('pName').value.trim(), cost: Number(document.getElementById('pCost').value), price: Number(document.getElementById('pPrice').value) };
  if (!o.hsn || !o.name) { showToast('Please fill all fields', 'err'); return; }
  if (id) { const i = DB.products.findIndex(p => p.id === id); DB.products[i] = { ...DB.products[i], ...o }; }
  else DB.products.push({ id: uid(), ...o });
  saveDB(); closeModal('productModal'); renderProducts(''); showToast('Product saved');
}
function deleteProduct(id, name) { confirmDelete(`Delete product "${name}"?`, () => { DB.products = DB.products.filter(p => p.id !== id); saveDB(); renderProducts(''); showToast('Deleted'); }); }

// ─────────────────────────────────────
//  VENDORS
// ─────────────────────────────────────
function populateHSN() {
  ['vHSN', 'puHSN', 'saHSN'].forEach(sid => {
    const el = document.getElementById(sid); if (!el) return;
    const cur = el.value;
    el.innerHTML = '<option value="">Select HSN</option>' + DB.products.map(p => `<option value="${p.hsn}">${p.hsn} — ${p.name}</option>`).join('');
    el.value = cur;
  });
  const saC = document.getElementById('saCustomer');
  if (saC) { const cur = saC.value; saC.innerHTML = '<option value="">Select Customer</option>' + DB.customers.map(c => `<option value="${c.custId}">${c.name}</option>`).join(''); saC.value = cur; }
}
function autoFillVendorProduct() { const p = DB.products.find(x => x.hsn === document.getElementById('vHSN').value); document.getElementById('vProduct').value = p ? p.name : ''; }
function renderVendors(q) {
  const list = DB.vendors.filter(v => !q || (v.name + v.product + v.hsn).toLowerCase().includes(q.toLowerCase()));
  const ro = currentUser?.role === 'staff';
  document.getElementById('vendorsTable').innerHTML = list.length
    ? list.map(v => `<tr>
        <td><span class="pill pill-blue">${v.hsn}</span></td>
        <td>${v.product}</td><td><b>${v.name}</b></td><td>${v.phone}</td><td>${v.address}</td>
        <td>${ro ? '<span style="color:var(--text3)">—</span>' : `<div class="act-btns">
          <button class="btn btn-blue btn-sm" onclick='editVendor(${JSON.stringify(v)})'>✏️ Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteVendor('${v.id}','${v.name}')">🗑️</button>
        </div>`}</td></tr>`).join('')
    : '<tr class="empty-row"><td colspan="6">No vendors found</td></tr>';
}
function editVendor(v) {
  document.getElementById('vendorModalTitle').textContent = 'Edit Vendor';
  document.getElementById('editVendorId').value = v.id;
  populateHSN();
  document.getElementById('vHSN').value = v.hsn;
  document.getElementById('vProduct').value = v.product;
  document.getElementById('vName').value = v.name;
  document.getElementById('vPhone').value = v.phone;
  document.getElementById('vAddress').value = v.address;
  document.getElementById('vendorModal').classList.add('open');
}
function saveVendor() {
  const id = document.getElementById('editVendorId').value;
  const o = { hsn: document.getElementById('vHSN').value, product: document.getElementById('vProduct').value, name: document.getElementById('vName').value.trim(), phone: document.getElementById('vPhone').value.trim(), address: document.getElementById('vAddress').value.trim() };
  if (!o.hsn || !o.name) { showToast('Please fill all fields', 'err'); return; }
  if (id) { const i = DB.vendors.findIndex(v => v.id === id); DB.vendors[i] = { ...DB.vendors[i], ...o }; }
  else DB.vendors.push({ id: uid(), ...o });
  saveDB(); closeModal('vendorModal'); renderVendors(''); showToast('Vendor saved');
}
function deleteVendor(id, name) { confirmDelete(`Delete vendor "${name}"?`, () => { DB.vendors = DB.vendors.filter(v => v.id !== id); saveDB(); renderVendors(''); showToast('Deleted'); }); }

// ─────────────────────────────────────
//  CUSTOMERS
// ─────────────────────────────────────
function renderCustomers(q) {
  const list = DB.customers.filter(c => !q || (c.name + c.email + c.custId).toLowerCase().includes(q.toLowerCase()));
  const ro = currentUser?.role === 'staff';
  document.getElementById('customersTable').innerHTML = list.length
    ? list.map(c => `<tr>
        <td><span class="pill pill-yellow">#${c.custId}</span></td>
        <td><b>${c.name}</b></td><td>${c.email}</td><td>${c.address}</td>
        <td>${ro ? '<span style="color:var(--text3)">—</span>' : `<div class="act-btns">
          <button class="btn btn-blue btn-sm" onclick='editCustomer(${JSON.stringify(c)})'>✏️ Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteCustomer('${c.id}','${c.name}')">🗑️</button>
        </div>`}</td></tr>`).join('')
    : '<tr class="empty-row"><td colspan="5">No customers found</td></tr>';
}
function editCustomer(c) {
  document.getElementById('customerModalTitle').textContent = 'Edit Customer';
  document.getElementById('editCustomerId').value = c.id;
  document.getElementById('cId').value = c.custId;
  document.getElementById('cName').value = c.name;
  document.getElementById('cEmail').value = c.email;
  document.getElementById('cAddress').value = c.address;
  document.getElementById('customerModal').classList.add('open');
}
function saveCustomer() {
  const id = document.getElementById('editCustomerId').value;
  const o = { custId: document.getElementById('cId').value.trim(), name: document.getElementById('cName').value.trim(), email: document.getElementById('cEmail').value.trim(), address: document.getElementById('cAddress').value.trim() };
  if (!o.custId || !o.name) { showToast('Please fill all fields', 'err'); return; }
  if (id) { const i = DB.customers.findIndex(c => c.id === id); DB.customers[i] = { ...DB.customers[i], ...o }; }
  else DB.customers.push({ id: uid(), ...o });
  saveDB(); closeModal('customerModal'); renderCustomers(''); showToast('Customer saved');
}
function deleteCustomer(id, name) { confirmDelete(`Delete customer "${name}"?`, () => { DB.customers = DB.customers.filter(c => c.id !== id); saveDB(); renderCustomers(''); showToast('Deleted'); }); }

// ─────────────────────────────────────
//  PURCHASE
// ─────────────────────────────────────
function autoFillPurchase() {
  const hsn  = document.getElementById('puHSN').value;
  const prod = DB.products.find(p => p.hsn === hsn);
  const vend = DB.vendors.find(v => v.hsn === hsn);
  document.getElementById('puProduct').value = prod ? prod.name : '';
  document.getElementById('puVendor').value  = vend ? vend.name : '';
  document.getElementById('puCost').value    = prod ? prod.cost : '';
  calcPurchaseAmt();
}
function calcPurchaseAmt() {
  const u = Number(document.getElementById('puUnits').value) || 0;
  const c = Number(document.getElementById('puCost').value)  || 0;
  document.getElementById('puAmount').value = u && c ? u * c : '';
}
function renderPurchase(q) {
  const list = DB.purchases.filter(p => !q || (p.product + p.vendor + p.hsn).toLowerCase().includes(q.toLowerCase()));
  document.getElementById('purchaseTable').innerHTML = list.length
    ? list.map(p => `<tr>
        <td><span class="pill pill-blue">${p.hsn}</span></td>
        <td><b>${p.product}</b></td><td>${p.vendor}</td><td>${p.date}</td>
        <td>${p.units}</td><td>৳${fmt(p.cost)}</td><td><b>৳${fmt(p.amount)}</b></td>
        <td><div class="act-btns">
          <button class="btn btn-blue btn-sm" onclick='editPurchase(${JSON.stringify(p)})'>✏️</button>
          <button class="btn btn-danger btn-sm" onclick="deletePurchase('${p.id}')">🗑️</button>
        </div></td></tr>`).join('')
    : '<tr class="empty-row"><td colspan="8">No purchase entries yet</td></tr>';
}
function editPurchase(p) {
  document.getElementById('purchaseModalTitle').textContent = 'Edit Purchase';
  document.getElementById('editPurchaseId').value = p.id;
  populateHSN();
  document.getElementById('puHSN').value    = p.hsn;
  document.getElementById('puProduct').value = p.product;
  document.getElementById('puVendor').value  = p.vendor;
  document.getElementById('puDate').value    = p.date;
  document.getElementById('puUnits').value   = p.units;
  document.getElementById('puCost').value    = p.cost;
  document.getElementById('puAmount').value  = p.amount;
  document.getElementById('purchaseModal').classList.add('open');
}
function savePurchase() {
  const id = document.getElementById('editPurchaseId').value;
  const o = { hsn: document.getElementById('puHSN').value, product: document.getElementById('puProduct').value, vendor: document.getElementById('puVendor').value, date: document.getElementById('puDate').value, units: Number(document.getElementById('puUnits').value), cost: Number(document.getElementById('puCost').value), amount: Number(document.getElementById('puAmount').value) };
  if (!o.hsn || !o.units || !o.date) { showToast('Please fill all fields', 'err'); return; }
  if (id) { const i = DB.purchases.findIndex(p => p.id === id); DB.purchases[i] = { ...DB.purchases[i], ...o }; }
  else DB.purchases.push({ id: uid(), ...o });
  saveDB(); closeModal('purchaseModal'); renderPurchase(''); showToast('Purchase entry saved');
}
function deletePurchase(id) { confirmDelete('Delete this purchase entry?', () => { DB.purchases = DB.purchases.filter(p => p.id !== id); saveDB(); renderPurchase(''); showToast('Deleted'); }); }

// ─────────────────────────────────────
//  SALES
// ─────────────────────────────────────
function autoFillSales() {
  const hsn  = document.getElementById('saHSN').value;
  const prod = DB.products.find(p => p.hsn === hsn);
  const inv  = getInvMap();
  document.getElementById('saProduct').value = prod ? prod.name : '';
  document.getElementById('saPrice').value   = prod ? prod.price : '';
  document.getElementById('saStock').value   = inv[hsn] ? inv[hsn].stock : '';
  calcSalesAmt();
}
function calcSalesAmt() {
  const u = Number(document.getElementById('saUnits').value) || 0;
  const p = Number(document.getElementById('saPrice').value) || 0;
  document.getElementById('saAmount').value = u && p ? u * p : '';
}
function renderSales(q) {
  const list = DB.sales.filter(s => !q || (s.product + s.customer + s.hsn).toLowerCase().includes(q.toLowerCase()));
  document.getElementById('salesTable').innerHTML = list.length
    ? list.map(s => `<tr>
        <td><b>${s.customer}</b></td>
        <td><span class="pill pill-blue">${s.hsn}</span></td>
        <td>${s.product}</td><td>${s.date}</td>
        <td>${s.units}</td><td>৳${fmt(s.price)}</td><td><b>৳${fmt(s.amount)}</b></td>
        <td><div class="act-btns">
          <button class="btn btn-blue btn-sm" onclick='editSale(${JSON.stringify(s)})'>✏️</button>
          <button class="btn btn-danger btn-sm" onclick="deleteSale('${s.id}')">🗑️</button>
        </div></td></tr>`).join('')
    : '<tr class="empty-row"><td colspan="8">No sales entries yet</td></tr>';
}
function editSale(s) {
  document.getElementById('salesModalTitle').textContent = 'Edit Sale';
  document.getElementById('editSaleId').value = s.id;
  populateHSN();
  document.getElementById('saCustomer').value = s.custId;
  document.getElementById('saHSN').value      = s.hsn;
  document.getElementById('saProduct').value  = s.product;
  document.getElementById('saDate').value     = s.date;
  document.getElementById('saStock').value    = '';
  document.getElementById('saUnits').value    = s.units;
  document.getElementById('saPrice').value    = s.price;
  document.getElementById('saAmount').value   = s.amount;
  document.getElementById('salesModal').classList.add('open');
}
function saveSale() {
  const id     = document.getElementById('editSaleId').value;
  const custId = document.getElementById('saCustomer').value;
  const cust   = DB.customers.find(c => c.custId === custId);
  const hsn    = document.getElementById('saHSN').value;
  const units  = Number(document.getElementById('saUnits').value);
  if (!custId || !hsn || !units) { showToast('Please fill all fields', 'err'); return; }
  if (!id) {
    const inv = getInvMap();
    if (inv[hsn] && units > inv[hsn].stock) { showToast(`Only ${inv[hsn].stock} units in stock!`, 'err'); return; }
  }
  const o = { custId, customer: cust ? cust.name : 'Unknown', hsn, product: document.getElementById('saProduct').value, date: document.getElementById('saDate').value, units, price: Number(document.getElementById('saPrice').value), amount: Number(document.getElementById('saAmount').value) };
  if (id) { const i = DB.sales.findIndex(s => s.id === id); DB.sales[i] = { ...DB.sales[i], ...o }; }
  else DB.sales.push({ id: uid(), ...o });
  saveDB(); closeModal('salesModal'); renderSales(''); showToast('Sale entry saved');
}
function deleteSale(id) { confirmDelete('Delete this sale entry?', () => { DB.sales = DB.sales.filter(s => s.id !== id); saveDB(); renderSales(''); showToast('Deleted'); }); }

// ─────────────────────────────────────
//  INVENTORY
// ─────────────────────────────────────
function renderInventory() {
  const inv = getInvMap();
  document.getElementById('inventoryTable').innerHTML = Object.entries(inv).map(([hsn, i]) => {
    const pct    = i.purchased > 0 ? Math.min(100, Math.round(i.stock / i.purchased * 100)) : 0;
    const col    = pct > 40 ? 'var(--success)' : pct > 15 ? 'var(--warning)' : 'var(--danger)';
    const status = i.stock <= 0 ? '<span class="pill pill-red">Out of Stock</span>' : i.stock <= 5 ? '<span class="pill pill-red">Low Stock</span>' : '<span class="pill pill-green">In Stock</span>';
    return `<tr>
      <td><span class="pill pill-blue">${hsn}</span></td>
      <td><b>${i.name}</b></td>
      <td>৳${fmt(i.cost)}</td>
      <td>${i.purchased}</td><td>${i.sold}</td>
      <td><b>${i.stock}</b><div class="stock-bar-wrap"><div class="stock-bar" style="width:${pct}%;background:${col}"></div></div></td>
      <td>৳${fmt(i.stockAmt)}</td>
      <td>${status}</td></tr>`;
  }).join('') || '<tr class="empty-row"><td colspan="8">No inventory data</td></tr>';
}

// ─────────────────────────────────────
//  BALANCE LEDGER PAGE
// ─────────────────────────────────────
function populateLedgerParty() {
  // Party can be any store / person name — free text. No dropdown needed.
}

function renderLedger(q) {
  const list = (DB.ledger || []).filter(e => !q || (e.party + e.note).toLowerCase().includes(q.toLowerCase()));
  const sorted = [...list].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  document.getElementById('ledgerTable').innerHTML = sorted.length
    ? sorted.map(e => {
        const typeLabel = e.type === 'owe'
          ? `<span class="ledger-type-badge ledger-owe">⬆ I Owe Them</span>`
          : `<span class="ledger-type-badge ledger-owed">⬇ They Owe Me</span>`;
        const settledBadge = e.settled
          ? `<span class="pill pill-blue">Settled</span>`
          : `<span class="pill pill-yellow">Pending</span>`;
        return `<tr>
          <td>${e.date}</td>
          <td><b>${e.party}</b></td>
          <td>${typeLabel}</td>
          <td><b style="color:${e.type === 'owe' ? 'var(--danger)' : 'var(--success)'}">৳${fmt(e.amount)}</b></td>
          <td>${e.note || '—'}</td>
          <td>${settledBadge}</td>
          <td><div class="act-btns">
            ${!e.settled ? `<button class="btn btn-blue btn-sm" onclick="settleLedger('${e.id}')">✓ Settle</button>` : ''}
            <button class="btn btn-blue btn-sm" onclick='editLedger(${JSON.stringify(e)})'>✏️</button>
            <button class="btn btn-danger btn-sm" onclick="deleteLedger('${e.id}')">🗑️</button>
          </div></td></tr>`;
      }).join('')
    : '<tr class="empty-row"><td colspan="7">No balance entries yet</td></tr>';

  // Summary bar on ledger page
  const { totalOwe, totalOwed, netBalance } = getBalanceSummary();
  document.getElementById('ledgerSummary').innerHTML = `
    <div class="card"><div class="card-lbl">I Owe Others</div><div class="card-val red">৳${fmt(totalOwe)}</div></div>
    <div class="card"><div class="card-lbl">Others Owe Me</div><div class="card-val green">৳${fmt(totalOwed)}</div></div>
    <div class="balance-card"><div class="card-lbl">Net Balance</div>
      <div class="card-val ${netBalance >= 0 ? 'green' : 'red'}">৳${fmt(Math.abs(netBalance))}</div>
      <div class="card-sub">${netBalance >= 0 ? '↑ Net Receivable' : '↓ Net Payable'}</div>
    </div>`;
}

function editLedger(e) {
  document.getElementById('ledgerModalTitle').textContent = 'Edit Balance Entry';
  document.getElementById('editLedgerId').value   = e.id;
  document.getElementById('ledParty').value       = e.party;
  document.getElementById('ledType').value        = e.type;
  document.getElementById('ledAmount').value      = e.amount;
  document.getElementById('ledDate').value        = e.date;
  document.getElementById('ledNote').value        = e.note || '';
  document.getElementById('ledSettled').checked   = !!e.settled;
  document.getElementById('ledgerModal').classList.add('open');
}

function saveLedger() {
  const id = document.getElementById('editLedgerId').value;
  const o = {
    party:   document.getElementById('ledParty').value.trim(),
    type:    document.getElementById('ledType').value,
    amount:  Number(document.getElementById('ledAmount').value),
    date:    document.getElementById('ledDate').value,
    note:    document.getElementById('ledNote').value.trim(),
    settled: document.getElementById('ledSettled').checked,
  };
  if (!o.party || !o.amount || !o.date) { showToast('Please fill Party, Amount and Date', 'err'); return; }
  if (id) { const i = DB.ledger.findIndex(e => e.id === id); DB.ledger[i] = { ...DB.ledger[i], ...o }; }
  else DB.ledger.push({ id: uid(), ...o });
  saveDB(); closeModal('ledgerModal'); renderLedger(''); showToast('Balance entry saved');
}

function settleLedger(id) {
  const i = DB.ledger.findIndex(e => e.id === id);
  if (i > -1) { DB.ledger[i].settled = true; saveDB(); renderLedger(''); showToast('Marked as settled ✓'); }
}

function deleteLedger(id) { confirmDelete('Delete this balance entry?', () => { DB.ledger = DB.ledger.filter(e => e.id !== id); saveDB(); renderLedger(''); showToast('Deleted'); }); }

// ─────────────────────────────────────
//  USERS
// ─────────────────────────────────────
function renderUsers() {
  const roleColor = { admin: 'pill-red', manager: 'pill-yellow', staff: 'pill-green' };
  document.getElementById('usersList').innerHTML = DB.users.map(u => `
    <div class="user-card">
      <div class="user-avatar">${u.name[0].toUpperCase()}</div>
      <div>
        <div class="user-name">${u.name}</div>
        <div class="user-role">@${u.username} &nbsp;<span class="pill ${roleColor[u.role] || 'pill-blue'}">${u.role}</span></div>
      </div>
      <div class="user-actions">
        <button class="btn btn-blue btn-sm" onclick='editUser(${JSON.stringify(u)})'>✏️ Edit</button>
        ${u.id !== currentUser?.id ? `<button class="btn btn-danger btn-sm" onclick="deleteUser('${u.id}','${u.name}')">🗑️</button>` : '<span style="font-size:11px;color:var(--text3);margin-left:4px">(you)</span>'}
      </div>
    </div>`).join('');
}
function editUser(u) {
  document.getElementById('userModalTitle').textContent = 'Edit User';
  document.getElementById('editUserId').value    = u.id;
  document.getElementById('uFullName').value     = u.name;
  document.getElementById('uUsername').value     = u.username;
  document.getElementById('uPassword').value     = u.password;
  document.getElementById('uRole').value         = u.role;
  document.getElementById('userModal').classList.add('open');
}
function saveUser() {
  const id = document.getElementById('editUserId').value;
  const o  = { name: document.getElementById('uFullName').value.trim(), username: document.getElementById('uUsername').value.trim(), password: document.getElementById('uPassword').value, role: document.getElementById('uRole').value };
  if (!o.name || !o.username || !o.password) { showToast('Fill all fields', 'err'); return; }
  if (o.password.length < 6) { showToast('Password must be 6+ characters', 'err'); return; }
  if (!id && DB.users.find(u => u.username === o.username)) { showToast('Username already taken', 'err'); return; }
  if (id) { const i = DB.users.findIndex(u => u.id === id); DB.users[i] = { ...DB.users[i], ...o }; }
  else DB.users.push({ id: uid(), ...o });
  saveDB(); closeModal('userModal'); renderUsers(); showToast('User saved');
}
function deleteUser(id, name) {
  if (id === currentUser?.id) { showToast("Can't delete yourself", 'err'); return; }
  confirmDelete(`Delete user "${name}"?`, () => { DB.users = DB.users.filter(u => u.id !== id); saveDB(); renderUsers(); showToast('User deleted'); });
}

// ─────────────────────────────────────
//  EXPORT TO CSV
// ─────────────────────────────────────
function exportExcel() {
  const sheets = {
    Products:  { headers: ['HSN Code','Product Name','Cost','Selling Price'], rows: DB.products.map(p => [p.hsn, p.name, p.cost, p.price]) },
    Vendors:   { headers: ['HSN Code','Product','Vendor Name','Phone','Address'], rows: DB.vendors.map(v => [v.hsn, v.product, v.name, v.phone, v.address]) },
    Customers: { headers: ['Customer ID','Name','Email','Address'], rows: DB.customers.map(c => [c.custId, c.name, c.email, c.address]) },
    Purchases: { headers: ['HSN','Product','Vendor','Date','Units','Cost','Amount'], rows: DB.purchases.map(p => [p.hsn, p.product, p.vendor, p.date, p.units, p.cost, p.amount]) },
    Sales:     { headers: ['Customer','HSN','Product','Date','Units','Price','Amount'], rows: DB.sales.map(s => [s.customer, s.hsn, s.product, s.date, s.units, s.price, s.amount]) },
    BalanceLedger: { headers: ['Date','Party','Type','Amount','Note','Status'], rows: (DB.ledger || []).map(e => [e.date, e.party, e.type === 'owe' ? 'I Owe Them' : 'They Owe Me', e.amount, e.note, e.settled ? 'Settled' : 'Pending']) },
    Inventory: { headers: ['HSN','Product','Cost','Purchased','Sold','Stock','Stock Value','Status'], rows: (() => { const inv = getInvMap(); return Object.entries(inv).map(([hsn, i]) => [hsn, i.name, i.cost, i.purchased, i.sold, i.stock, i.stockAmt, i.stock <= 0 ? 'Out of Stock' : i.stock <= 5 ? 'Low Stock' : 'In Stock']); })() },
  };
  let csv = '';
  Object.entries(sheets).forEach(([name, sheet]) => {
    csv += '\n=== ' + name + ' ===\n';
    csv += sheet.headers.join(',') + '\n';
    sheet.rows.forEach(r => { csv += r.map(v => '"' + (String(v || '').replace(/"/g, '""')) + '"').join(',') + '\n'; });
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'InvenTrack_Export_' + new Date().toISOString().split('T')[0] + '.csv';
  a.click();
  showToast('Exported successfully');
}

// ─────────────────────────────────────
//  BACKUP & RESTORE
// ─────────────────────────────────────
function backupData() {
  const blob = new Blob([JSON.stringify(DB, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'InvenTrack_Backup_' + new Date().toISOString().split('T')[0] + '.json';
  a.click();
  showToast('Backup downloaded');
}
function restoreData(e) {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = async function (ev) {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.products || !data.sales) { showToast('Invalid backup file', 'err'); return; }
      if (!data.ledger) data.ledger = [];
      DB = data;
      await saveDB();
      showToast('Backup restored successfully');
      renderDashboard();
    } catch (err) { showToast('Could not read file', 'err'); }
  };
  reader.readAsText(file);
}

// ─────────────────────────────────────
//  BOOT
// ─────────────────────────────────────
(async () => { await loadDB(); })();
