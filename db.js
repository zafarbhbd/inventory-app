// =============================================
//  Students Point — db.js
//  Shared data layer: seed, load, save, auth
// =============================================

const SEED = {
  users: [
    { id:'u1', name:'Administrator', username:'admin',   password:'admin123',   role:'admin'   },
    { id:'u2', name:'Manager',       username:'manager', password:'manager123', role:'manager' },
    { id:'u3', name:'Staff Member',  username:'staff',   password:'staff123',   role:'staff'   },
  ],
  products: [
    { id:'p1',  hsn:'N1001', name:'Smart Watch',        cost:980,   price:1176   },
    { id:'p2',  hsn:'N1002', name:'Laptop HP xyz i5',   cost:34500, price:41400  },
    { id:'p3',  hsn:'N1003', name:'Wireless Printer',   cost:4600,  price:5520   },
    { id:'p4',  hsn:'N1004', name:'Desktop',            cost:21000, price:25200  },
    { id:'p5',  hsn:'N1005', name:'Mouse',              cost:200,   price:240    },
    { id:'p6',  hsn:'N1006', name:'Rgb Keyboard',       cost:340,   price:408    },
    { id:'p7',  hsn:'N1007', name:'Camera',             cost:52000, price:62400  },
    { id:'p8',  hsn:'N1008', name:'Headphones',         cost:799,   price:958.8  },
    { id:'p9',  hsn:'N1009', name:'Speakers',           cost:670,   price:804    },
    { id:'p10', hsn:'N1010', name:'Tablets',            cost:23500, price:28200  },
  ],
  vendors: [
    { id:'v1',  hsn:'N1001', product:'Smart Watch',        name:'Tech99',     phone:'9812xxxxxx', address:'Faridabad, 121101' },
    { id:'v2',  hsn:'N1002', product:'Laptop HP xyz i5',   name:'Tech99',     phone:'9812xxxxxx', address:'Faridabad, 121102' },
    { id:'v3',  hsn:'N1003', product:'Wireless Printer',   name:'Tech99',     phone:'9812xxxxxx', address:'Faridabad, 121103' },
    { id:'v4',  hsn:'N1004', product:'Desktop',            name:'GG Traders', phone:'9813xxxxxx', address:'Gurgaon, Sec-15'   },
    { id:'v5',  hsn:'N1005', product:'Mouse',              name:'GG Traders', phone:'9813xxxxxx', address:'Gurgaon, Sec-16'   },
    { id:'v6',  hsn:'N1006', product:'Rgb Keyboard',       name:'GG Traders', phone:'9813xxxxxx', address:'Gurgaon, Sec-17'   },
    { id:'v7',  hsn:'N1007', product:'Camera',             name:'GG Traders', phone:'9813xxxxxx', address:'Gurgaon, Sec-18'   },
    { id:'v8',  hsn:'N1008', product:'Headphones',         name:'Compac',     phone:'9814xxxxxx', address:'New Delhi, 110012' },
    { id:'v9',  hsn:'N1009', product:'Speakers',           name:'Compac',     phone:'9814xxxxxx', address:'New Delhi, 110013' },
    { id:'v10', hsn:'N1010', product:'Tablets',            name:'Compac',     phone:'9814xxxxxx', address:'New Delhi, 110014' },
  ],
  customers: [
    { id:'c1', custId:'C100', name:'Ram Sales',    email:'ram@gmail.com',  phone:'9811xxxxxx', address:'Delhi, India'       },
    { id:'c2', custId:'C101', name:'Atul Ltd.',    email:'atul@gmail.com', phone:'9812xxxxxx', address:'Palwal, HR'         },
    { id:'c3', custId:'C102', name:'MK Tech.',     email:'mk@gmail.com',   phone:'9813xxxxxx', address:'Faridabad, 121101'  },
    { id:'c4', custId:'C103', name:'99store',      email:'99s@gmail.com',  phone:'9814xxxxxx', address:'Agra, UP'           },
    { id:'c5', custId:'C104', name:'Rajesh Kumar', email:'raj@gmail.com',  phone:'9815xxxxxx', address:'New Delhi, 110011'  },
    { id:'c6', custId:'C105', name:'Amit',         email:'ami@gmail.com',  phone:'9816xxxxxx', address:'Gurgaon, Sec-15'   },
    { id:'c7', custId:'C106', name:'Jain Tel.',    email:'jai@gmail.com',  phone:'9817xxxxxx', address:'Janpath, New Delhi' },
  ],
  purchases: [
    { id:'pu1',  hsn:'N1005', product:'Mouse',            vendor:'GG Traders', date:'2024-01-01', units:20,  cost:200,   amount:4000,    paid:'paid' },
    { id:'pu2',  hsn:'N1008', product:'Headphones',       vendor:'Compac',     date:'2024-01-02', units:10,  cost:799,   amount:7990,    paid:'paid' },
    { id:'pu3',  hsn:'N1006', product:'Rgb Keyboard',     vendor:'GG Traders', date:'2024-01-03', units:50,  cost:340,   amount:17000,   paid:'paid' },
    { id:'pu4',  hsn:'N1004', product:'Desktop',          vendor:'GG Traders', date:'2024-01-04', units:100, cost:21000, amount:2100000, paid:'paid' },
    { id:'pu5',  hsn:'N1007', product:'Camera',           vendor:'GG Traders', date:'2024-01-05', units:20,  cost:52000, amount:1040000, paid:'paid' },
    { id:'pu6',  hsn:'N1001', product:'Smart Watch',      vendor:'Tech99',     date:'2024-01-06', units:40,  cost:980,   amount:39200,   paid:'paid' },
    { id:'pu7',  hsn:'N1002', product:'Laptop HP xyz i5', vendor:'Tech99',     date:'2024-01-07', units:30,  cost:34500, amount:1035000, paid:'paid' },
    { id:'pu8',  hsn:'N1003', product:'Wireless Printer', vendor:'Tech99',     date:'2024-01-08', units:40,  cost:4600,  amount:184000,  paid:'paid' },
    { id:'pu9',  hsn:'N1009', product:'Speakers',         vendor:'Compac',     date:'2024-01-09', units:55,  cost:670,   amount:36850,   paid:'paid' },
    { id:'pu10', hsn:'N1010', product:'Tablets',          vendor:'Compac',     date:'2024-01-10', units:40,  cost:23500, amount:940000,  paid:'paid' },
  ],
  sales: [
    { id:'s1',  custId:'C103', customer:'99store',      hsn:'N1008', product:'Headphones',       date:'2024-01-01', units:10, price:958.8,  amount:9588,    paid:'paid' },
    { id:'s2',  custId:'C104', customer:'Rajesh Kumar', hsn:'N1006', product:'Rgb Keyboard',     date:'2024-01-02', units:37, price:408,    amount:15096,   paid:'paid' },
    { id:'s3',  custId:'C101', customer:'Atul Ltd.',    hsn:'N1004', product:'Desktop',          date:'2024-01-03', units:10, price:25200,  amount:252000,  paid:'paid' },
    { id:'s4',  custId:'C100', customer:'Ram Sales',    hsn:'N1008', product:'Headphones',       date:'2024-01-04', units:32, price:958.8,  amount:30681.6, paid:'paid' },
    { id:'s5',  custId:'C102', customer:'MK Tech.',     hsn:'N1002', product:'Laptop HP xyz i5', date:'2024-01-05', units:14, price:41400,  amount:579600,  paid:'paid' },
    { id:'s6',  custId:'C103', customer:'99store',      hsn:'N1004', product:'Desktop',          date:'2024-01-06', units:55, price:25200,  amount:1386000, paid:'paid' },
    { id:'s7',  custId:'C105', customer:'Amit',         hsn:'N1010', product:'Tablets',          date:'2024-01-07', units:8,  price:28200,  amount:225600,  paid:'paid' },
    { id:'s8',  custId:'C106', customer:'Jain Tel.',    hsn:'N1009', product:'Speakers',         date:'2024-01-08', units:52, price:804,    amount:41808,   paid:'paid' },
    { id:'s9',  custId:'C104', customer:'Rajesh Kumar', hsn:'N1010', product:'Tablets',          date:'2024-01-08', units:4,  price:28200,  amount:112800,  paid:'paid' },
    { id:'s10', custId:'C103', customer:'99store',      hsn:'N1001', product:'Smart Watch',      date:'2024-01-08', units:37, price:1176,   amount:43512,   paid:'paid' },
  ],
  // Service Revenue entries: { id, date, name, description, amount }
  serviceRevenue: [],
  // Operating Expenses: { id, date, name, category (Rent/Salary/Utility/Other), amount }
  opExpenses: [],
  // Accounts Receivable payments: { id, custId, date, amount, note }
  arPayments: [],
  // Accounts Payable payments: { id, vendorId, date, amount, note }
  apPayments: [],
  // Balance Sheet Items
  assets:      [],   // { id, assetId, name, balance }
  liabilities: [],   // { id, liabilityId, name, balance }
  equity:      [],   // { id, equityId, name, balance }
  // Balance Ledger (inter-store credit)
  ledger: [],
  // Cash Book
  cash: [],
};

// ─── GLOBAL STATE ────────────────────────────
window.DB          = {};
window.currentUser = null;

// ─── HELPERS ─────────────────────────────────
window.uid  = () => Date.now().toString(36) + Math.random().toString(36).slice(2,6);
window.fmt  = n  => Number(n||0).toLocaleString('en-IN',{minimumFractionDigits:0,maximumFractionDigits:2});
window.today= ()  => new Date().toISOString().split('T')[0];
window.inRange = (date,from,to) => {
  if (!from && !to) return true;
  if (from && date < from) return false;
  if (to   && date > to)   return false;
  return true;
};

// ─── LOADER ──────────────────────────────────
window.showLoader = (msg) => {
  let el = document.getElementById('globalLoader');
  if (!el) {
    el = document.createElement('div');
    el.id = 'globalLoader';
    el.style.cssText = 'position:fixed;inset:0;background:#0f172aee;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Inter,sans-serif;';
    el.innerHTML = `<div style="font-size:24px;font-weight:800;color:#60a5fa;margin-bottom:10px">Students Point</div>
      <div id="loaderMsg" style="color:#94a3b8;font-size:14px"></div>
      <div style="margin-top:18px;width:36px;height:36px;border:3px solid #334155;border-top-color:#2563eb;border-radius:50%;animation:spin .8s linear infinite"></div>`;
    document.body.appendChild(el);
  }
  document.getElementById('loaderMsg').textContent = msg || 'Loading…';
  el.style.display = 'flex';
};
window.hideLoader = () => { const el=document.getElementById('globalLoader'); if(el) el.style.display='none'; };

// ─── FIREBASE LOAD/SAVE ──────────────────────
window.loadDB = async () => {
  showLoader('Connecting to Firebase…');
  try {
    const snap = await DOC_REF.get();
    if (snap.exists) {
      window.DB = snap.data();
      // Migrations for missing keys
      const keys = ['ledger','cash','serviceRevenue','opExpenses','arPayments','apPayments','assets','liabilities','equity'];
      keys.forEach(k => { if (!window.DB[k]) window.DB[k] = []; });
      window.DB.purchases.forEach(p => { if (!p.paid) p.paid='paid'; });
      window.DB.sales.forEach(s => { if (!s.paid) s.paid='paid'; });
    } else {
      showLoader('First-time setup…');
      window.DB = JSON.parse(JSON.stringify(SEED));
      await DOC_REF.set(window.DB);
    }
  } catch(e) {
    console.warn('Firebase error, using local fallback:', e);
    const local = localStorage.getItem('spLocal');
    window.DB = local ? JSON.parse(local) : JSON.parse(JSON.stringify(SEED));
    const keys = ['ledger','cash','serviceRevenue','opExpenses','arPayments','apPayments','assets','liabilities','equity'];
    keys.forEach(k => { if (!window.DB[k]) window.DB[k]=[]; });
  }
  hideLoader();
};

window.saveDB = async () => {
  setSyncStatus('syncing');
  localStorage.setItem('spLocal', JSON.stringify(window.DB));
  try {
    await DOC_REF.set(window.DB);
    setSyncStatus('ok');
  } catch(e) {
    console.error('Firebase save failed:', e);
    setSyncStatus('error');
  }
};

window.setSyncStatus = (state) => {
  document.querySelectorAll('.sync-dot').forEach(d => {
    d.className = 'sync-dot' + (state==='syncing'?' syncing':state==='error'?' error':'');
  });
  document.querySelectorAll('.sync-status').forEach(s => {
    s.textContent = state==='syncing'?'Saving…':state==='error'?'Save failed':'Saved ✓';
  });
};

// ─── AUTH ─────────────────────────────────────
window.requireAuth = () => {
  const raw = localStorage.getItem('spUser');
  if (!raw) { window.location.href='index.html'; return false; }
  window.currentUser = JSON.parse(raw);
  return true;
};

window.doLogout = () => {
  localStorage.removeItem('spUser');
  window.location.href = 'index.html';
};

// ─── TOAST ────────────────────────────────────
let _tt;
window.showToast = (msg, type='ok') => {
  const t = document.getElementById('toast');
  if (!t) return;
  document.getElementById('toastIcon').textContent = type==='ok'?'✅':'❌';
  document.getElementById('toastMsg').textContent  = msg;
  t.classList.remove('hidden');
  clearTimeout(_tt);
  _tt = setTimeout(()=>t.classList.add('hidden'), 2800);
};

// ─── CONFIRM DELETE ───────────────────────────
window.confirmDelete = (msg, cb) => {
  document.getElementById('confirmMsg').textContent = msg;
  document.getElementById('confirmOkBtn').onclick = () => { cb(); closeModal('confirmModal'); };
  document.getElementById('confirmModal').classList.add('open');
};

// ─── MODALS ───────────────────────────────────
window.closeModal = (id) => {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
};
function attachModalOverlays() {
  document.querySelectorAll('.modal-overlay').forEach(o => {
    if (o._overlayBound) return;
    o._overlayBound = true;
    o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); });
  });
}
document.addEventListener('DOMContentLoaded', attachModalOverlays);
window.attachModalOverlays = attachModalOverlays;

// ─── SIDEBAR ACTIVE LINK ─────────────────────
window.setSidebarActive = (page) => {
  document.querySelectorAll('.nav-item[data-page]').forEach(n => {
    n.classList.toggle('active', n.dataset.page===page);
  });
};

// ─── INVENTORY MAP ────────────────────────────
window.getInvMap = () => {
  const m = {};
  (window.DB.products||[]).forEach(p => { m[p.hsn]={name:p.name,cost:p.cost,purchased:0,sold:0,ledgerTook:0,ledgerGave:0}; });
  (window.DB.purchases||[]).forEach(p => { if(m[p.hsn]) m[p.hsn].purchased+=Number(p.units); });
  (window.DB.sales||[]).forEach(s => { if(m[s.hsn]) m[s.hsn].sold+=Number(s.units); });
  (window.DB.ledger||[]).filter(e=>!e.settled).forEach(e => {
    if(!e.hsn||!m[e.hsn]) return;
    if(e.type==='owe')  m[e.hsn].ledgerTook+=Number(e.units||0);
    if(e.type==='owed') m[e.hsn].ledgerGave+=Number(e.units||0);
  });
  Object.keys(m).forEach(k => {
    const i=m[k];
    i.stock=i.purchased+i.ledgerTook-i.sold-i.ledgerGave;
    i.stockAmt=i.stock*i.cost;
  });
  return m;
};

// ─── BALANCE SUMMARY ─────────────────────────
window.getBalanceSummary = () => {
  const active=(window.DB.ledger||[]).filter(e=>!e.settled);
  let totalOwe=0,totalOwed=0;
  const partyMap={};
  active.forEach(e => {
    const amt=Number(e.amount);
    if(e.type==='owe')  { totalOwe +=amt; partyMap[e.party]=(partyMap[e.party]||0)-amt; }
    if(e.type==='owed') { totalOwed+=amt; partyMap[e.party]=(partyMap[e.party]||0)+amt; }
  });
  return { totalOwe, totalOwed, netBalance:totalOwed-totalOwe, partyMap };
};

// ─── ACCOUNTS RECEIVABLE SUMMARY ─────────────
// AR balance = total sales on credit - payments received
window.getARSummary = () => {
  const custMap = {};
  (window.DB.customers||[]).forEach(c => {
    custMap[c.custId] = { name:c.name, custId:c.custId, balance:0, paid:0 };
  });
  (window.DB.sales||[]).filter(s=>s.paid==='credit').forEach(s => {
    if(custMap[s.custId]) custMap[s.custId].balance += Number(s.amount);
  });
  (window.DB.arPayments||[]).forEach(p => {
    if(custMap[p.custId]) custMap[p.custId].paid += Number(p.amount);
  });
  Object.values(custMap).forEach(c => { c.netBalance = c.balance - c.paid; });
  return custMap;
};

// ─── ACCOUNTS PAYABLE SUMMARY ────────────────
// AP balance = total purchases on credit - cash payments made
window.getAPSummary = () => {
  const vendMap = {};
  (window.DB.vendors||[]).forEach(v => {
    if(!vendMap[v.name]) vendMap[v.name] = { name:v.name, balance:0, paid:0 };
  });
  (window.DB.purchases||[]).filter(p=>p.paid==='credit').forEach(p => {
    if(vendMap[p.vendor]) vendMap[p.vendor].balance += Number(p.amount);
  });
  (window.DB.apPayments||[]).forEach(p => {
    if(vendMap[p.vendorName]) vendMap[p.vendorName].paid += Number(p.amount);
  });
  Object.values(vendMap).forEach(v => { v.netBalance = v.balance - v.paid; });
  return vendMap;
};

// ─── CASH SUMMARY ────────────────────────────
window.getCashSummary = (from,to) => {
  const entries=(window.DB.cash||[]).filter(e=>inRange(e.date,from,to));
  const totalIn  = entries.filter(e=>e.type==='in' ).reduce((a,b)=>a+Number(b.amount),0);
  const totalOut = entries.filter(e=>e.type==='out').reduce((a,b)=>a+Number(b.amount),0);
  return { totalIn, totalOut, onHand:totalIn-totalOut };
};

// ─── RENDER SIDEBAR POPULATED ────────────────
window.renderSidebar = () => {
  const u = window.currentUser;
  if (!u) return;
  const el = document.getElementById('sidebarUser');
  if (el) el.textContent = u.name;
  const roleEl = document.getElementById('sidebarRole');
  if (roleEl) roleEl.textContent = u.role;
  const usersNav = document.getElementById('usersNav');
  if (usersNav) usersNav.style.display = u.role==='admin'?'flex':'none';
};
