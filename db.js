// =============================================
//  Students Point — db.js
//  Shared data layer: seed, load, save, auth
// =============================================

const SEED = {
  users: [
    { id:'u1', name:'Administrator', username:'admin',   password:'',   role:'admin'   },
    { id:'u2', name:'Manager',       username:'manager', password:'',   role:'manager' },
    { id:'u3', name:'Staff Member',  username:'staff',   password:'',   role:'staff'   },
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
    { id:'pu1',  hsn:'N1005', product:'Mouse',            vendor:'GG Traders', date:'2024-01-01', units:20,  cost:200,   amount:4000,    paid:'paid', cashId:'seed-c1'  },
    { id:'pu2',  hsn:'N1008', product:'Headphones',       vendor:'Compac',     date:'2024-01-02', units:10,  cost:799,   amount:7990,    paid:'paid', cashId:'seed-c2'  },
    { id:'pu3',  hsn:'N1006', product:'Rgb Keyboard',     vendor:'GG Traders', date:'2024-01-03', units:50,  cost:340,   amount:17000,   paid:'paid', cashId:'seed-c3'  },
    { id:'pu4',  hsn:'N1004', product:'Desktop',          vendor:'GG Traders', date:'2024-01-04', units:100, cost:21000, amount:2100000, paid:'paid', cashId:'seed-c4'  },
    { id:'pu5',  hsn:'N1007', product:'Camera',           vendor:'GG Traders', date:'2024-01-05', units:20,  cost:52000, amount:1040000, paid:'paid', cashId:'seed-c5'  },
    { id:'pu6',  hsn:'N1001', product:'Smart Watch',      vendor:'Tech99',     date:'2024-01-06', units:40,  cost:980,   amount:39200,   paid:'paid', cashId:'seed-c6'  },
    { id:'pu7',  hsn:'N1002', product:'Laptop HP xyz i5', vendor:'Tech99',     date:'2024-01-07', units:30,  cost:34500, amount:1035000, paid:'paid', cashId:'seed-c7'  },
    { id:'pu8',  hsn:'N1003', product:'Wireless Printer', vendor:'Tech99',     date:'2024-01-08', units:40,  cost:4600,  amount:184000,  paid:'paid', cashId:'seed-c8'  },
    { id:'pu9',  hsn:'N1009', product:'Speakers',         vendor:'Compac',     date:'2024-01-09', units:55,  cost:670,   amount:36850,   paid:'paid', cashId:'seed-c9'  },
    { id:'pu10', hsn:'N1010', product:'Tablets',          vendor:'Compac',     date:'2024-01-10', units:40,  cost:23500, amount:940000,  paid:'paid', cashId:'seed-c10' },
  ],
  sales: [
    { id:'s1',  custId:'C103', customer:'99store',      hsn:'N1008', product:'Headphones',       date:'2024-01-01', units:10, price:958.8,  amount:9588,    paid:'paid', cashId:'seed-s1'  },
    { id:'s2',  custId:'C104', customer:'Rajesh Kumar', hsn:'N1006', product:'Rgb Keyboard',     date:'2024-01-02', units:37, price:408,    amount:15096,   paid:'paid', cashId:'seed-s2'  },
    { id:'s3',  custId:'C101', customer:'Atul Ltd.',    hsn:'N1004', product:'Desktop',          date:'2024-01-03', units:10, price:25200,  amount:252000,  paid:'paid', cashId:'seed-s3'  },
    { id:'s4',  custId:'C100', customer:'Ram Sales',    hsn:'N1008', product:'Headphones',       date:'2024-01-04', units:32, price:958.8,  amount:30681.6, paid:'paid', cashId:'seed-s4'  },
    { id:'s5',  custId:'C102', customer:'MK Tech.',     hsn:'N1002', product:'Laptop HP xyz i5', date:'2024-01-05', units:14, price:41400,  amount:579600,  paid:'paid', cashId:'seed-s5'  },
    { id:'s6',  custId:'C103', customer:'99store',      hsn:'N1004', product:'Desktop',          date:'2024-01-06', units:55, price:25200,  amount:1386000, paid:'paid', cashId:'seed-s6'  },
    { id:'s7',  custId:'C105', customer:'Amit',         hsn:'N1010', product:'Tablets',          date:'2024-01-07', units:8,  price:28200,  amount:225600,  paid:'paid', cashId:'seed-s7'  },
    { id:'s8',  custId:'C106', customer:'Jain Tel.',    hsn:'N1009', product:'Speakers',         date:'2024-01-08', units:52, price:804,    amount:41808,   paid:'paid', cashId:'seed-s8'  },
    { id:'s9',  custId:'C104', customer:'Rajesh Kumar', hsn:'N1010', product:'Tablets',          date:'2024-01-08', units:4,  price:28200,  amount:112800,  paid:'paid', cashId:'seed-s9'  },
    { id:'s10', custId:'C103', customer:'99store',      hsn:'N1001', product:'Smart Watch',      date:'2024-01-08', units:37, price:1176,   amount:43512,   paid:'paid', cashId:'seed-s10' },
  ],
  serviceRevenue: [],
  opExpenses: [],
  arPayments: [],
  apPayments: [],
  // Asset liabilities: { id, assetId, name, balance, payType, vendorName, date }
  // assetLiabilities stores credit asset purchases for AP tracking only
  // Does NOT go into DB.purchases — keeps inventory clean
  assetLiabilities: [],
  assets:      [],
  liabilities: [],
  equity:      [],
  ledger: [],
  cash: [
    // Seed cash entries matching seed purchases (cash out)
    { id:'seed-c1',  type:'out', category:'Purchase', date:'2024-01-01', amount:4000,    note:'Purchase: Mouse'            },
    { id:'seed-c2',  type:'out', category:'Purchase', date:'2024-01-02', amount:7990,    note:'Purchase: Headphones'       },
    { id:'seed-c3',  type:'out', category:'Purchase', date:'2024-01-03', amount:17000,   note:'Purchase: Rgb Keyboard'     },
    { id:'seed-c4',  type:'out', category:'Purchase', date:'2024-01-04', amount:2100000, note:'Purchase: Desktop'          },
    { id:'seed-c5',  type:'out', category:'Purchase', date:'2024-01-05', amount:1040000, note:'Purchase: Camera'           },
    { id:'seed-c6',  type:'out', category:'Purchase', date:'2024-01-06', amount:39200,   note:'Purchase: Smart Watch'      },
    { id:'seed-c7',  type:'out', category:'Purchase', date:'2024-01-07', amount:1035000, note:'Purchase: Laptop HP xyz i5' },
    { id:'seed-c8',  type:'out', category:'Purchase', date:'2024-01-08', amount:184000,  note:'Purchase: Wireless Printer' },
    { id:'seed-c9',  type:'out', category:'Purchase', date:'2024-01-09', amount:36850,   note:'Purchase: Speakers'         },
    { id:'seed-c10', type:'out', category:'Purchase', date:'2024-01-10', amount:940000,  note:'Purchase: Tablets'          },
    // Seed cash entries matching seed sales (cash in)
    { id:'seed-s1',  type:'in',  category:'Sales', date:'2024-01-01', amount:9588,    note:'Sale: Headphones to 99store'           },
    { id:'seed-s2',  type:'in',  category:'Sales', date:'2024-01-02', amount:15096,   note:'Sale: Rgb Keyboard to Rajesh Kumar'    },
    { id:'seed-s3',  type:'in',  category:'Sales', date:'2024-01-03', amount:252000,  note:'Sale: Desktop to Atul Ltd.'            },
    { id:'seed-s4',  type:'in',  category:'Sales', date:'2024-01-04', amount:30681.6, note:'Sale: Headphones to Ram Sales'         },
    { id:'seed-s5',  type:'in',  category:'Sales', date:'2024-01-05', amount:579600,  note:'Sale: Laptop HP xyz i5 to MK Tech.'    },
    { id:'seed-s6',  type:'in',  category:'Sales', date:'2024-01-06', amount:1386000, note:'Sale: Desktop to 99store'              },
    { id:'seed-s7',  type:'in',  category:'Sales', date:'2024-01-07', amount:225600,  note:'Sale: Tablets to Amit'                 },
    { id:'seed-s8',  type:'in',  category:'Sales', date:'2024-01-08', amount:41808,   note:'Sale: Speakers to Jain Tel.'           },
    { id:'seed-s9',  type:'in',  category:'Sales', date:'2024-01-08', amount:112800,  note:'Sale: Tablets to Rajesh Kumar'         },
    { id:'seed-s10', type:'in',  category:'Sales', date:'2024-01-08', amount:43512,   note:'Sale: Smart Watch to 99store'          },
  ],
};

// ─── GLOBAL STATE ────────────────────────────
window.DB          = {};
window.currentUser = null;

// ─── HELPERS ─────────────────────────────────
window.uid   = () => Date.now().toString(36) + Math.random().toString(36).slice(2,6);
window.fmt   = n  => Number(n||0).toLocaleString('en-IN',{minimumFractionDigits:0,maximumFractionDigits:2});
window.today = ()  => new Date().toISOString().split('T')[0];
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
      const keys = ['ledger','cash','serviceRevenue','opExpenses','arPayments','apPayments',
                    'assets','liabilities','equity','assetLiabilities'];
      keys.forEach(k => { if (!window.DB[k]) window.DB[k] = []; });
      window.DB.purchases.forEach(p => { if (!p.paid) p.paid='paid'; });
      window.DB.sales.forEach(s => { if (!s.paid) s.paid='paid'; });
      // Migration: add cashId to seed records if missing
      _migrateSeedCashIds();
    } else {
      showLoader('First-time setup…');
      window.DB = JSON.parse(JSON.stringify(SEED));
      await DOC_REF.set(window.DB);
    }
  } catch(e) {
    console.warn('Firebase error, using local fallback:', e);
    const local = localStorage.getItem('spLocal');
    window.DB = local ? JSON.parse(local) : JSON.parse(JSON.stringify(SEED));
    const keys = ['ledger','cash','serviceRevenue','opExpenses','arPayments','apPayments',
                  'assets','liabilities','equity','assetLiabilities'];
    keys.forEach(k => { if (!window.DB[k]) window.DB[k]=[]; });
    _migrateSeedCashIds();
  }
  hideLoader();
};

// Ensure seed records have cashId linking to their cash entries
function _migrateSeedCashIds() {
  const seedPuMap = {
    'pu1':'seed-c1','pu2':'seed-c2','pu3':'seed-c3','pu4':'seed-c4','pu5':'seed-c5',
    'pu6':'seed-c6','pu7':'seed-c7','pu8':'seed-c8','pu9':'seed-c9','pu10':'seed-c10'
  };
  const seedSaMap = {
    's1':'seed-s1','s2':'seed-s2','s3':'seed-s3','s4':'seed-s4','s5':'seed-s5',
    's6':'seed-s6','s7':'seed-s7','s8':'seed-s8','s9':'seed-s9','s10':'seed-s10'
  };
  (window.DB.purchases||[]).forEach(p => { if(!p.cashId && seedPuMap[p.id]) p.cashId=seedPuMap[p.id]; });
  (window.DB.sales||[]).forEach(s => { if(!s.cashId && seedSaMap[s.id]) s.cashId=seedSaMap[s.id]; });
}

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
  // Only count inventory purchases (not asset credit purchases)
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

// ─── NET INCOME CALCULATOR (Standard — Option B) ────
// Formula:
//   Revenue  = Sales Revenue + Service Revenue
//   COGS     = Opening Stock (0) + Purchases - Closing Stock
//   Gross Profit = Revenue - COGS
//   Net Income   = Gross Profit - Operating Expenses
// Date filter applies to Sales, Purchases, Service, OpExpenses
// Closing Stock is always current (all-time) — standard practice
window.calcNetIncome = (from, to) => {
  const sales     = (window.DB.sales||[]).filter(s => inRange(s.date, from, to));
  const purchases = (window.DB.purchases||[]).filter(p => inRange(p.date, from, to));
  const svcRev    = (window.DB.serviceRevenue||[]).filter(s => inRange(s.date, from, to));
  const opExp     = (window.DB.opExpenses||[]).filter(e => inRange(e.date, from, to));

  const totSales  = sales.reduce((a,b) => a + Number(b.amount), 0);
  const totSvc    = svcRev.reduce((a,b) => a + Number(b.amount), 0);
  const totRev    = totSales + totSvc;

  // COGS = Opening Stock + Purchases - Closing Stock
  // Opening Stock = 0 (records start from beginning)
  const totPurch  = purchases.reduce((a,b) => a + Number(b.amount), 0);
  const inv       = getInvMap(); // always current closing stock
  const closingStock = Object.values(inv).reduce((a,b) => a + b.stockAmt, 0);
  const cogs      = totPurch - closingStock; // 0 + purchases - closing

  const totOpExp  = opExp.reduce((a,b) => a + Number(b.amount), 0);
  // Individual expense line items with name (not category)
  const expLines  = opExp.map(e => ({ name: e.name, category: e.category, amount: Number(e.amount) }));
  // Group by category for subtotals
  const expCats   = {};
  opExp.forEach(e => { expCats[e.category] = (expCats[e.category]||0) + Number(e.amount); });

  const grossProfit = totRev - cogs;
  const netIncome   = grossProfit - totOpExp;

  return {
    totSales, totSvc, totRev,
    totPurch, closingStock, cogs,
    grossProfit,
    totOpExp, expLines, expCats,
    netIncome
  };
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
  // Only return customers with activity
  return Object.fromEntries(Object.entries(custMap).filter(([,c])=>c.balance>0||c.paid>0));
};

// ─── ACCOUNTS PAYABLE SUMMARY ────────────────
// Includes vendor credit purchases AND asset credit purchases
window.getAPSummary = () => {
  const vendMap = {};
  // Seed from vendors list
  (window.DB.vendors||[]).forEach(v => {
    if(!vendMap[v.name]) vendMap[v.name] = { name:v.name, balance:0, paid:0 };
  });
  // Credit purchases from inventory transactions
  (window.DB.purchases||[]).filter(p=>p.paid==='credit').forEach(p => {
    if(!vendMap[p.vendor]) vendMap[p.vendor]={ name:p.vendor, balance:0, paid:0 };
    vendMap[p.vendor].balance += Number(p.amount);
  });
  // Asset credit purchases (stored separately, not in purchases)
  (window.DB.assetLiabilities||[]).forEach(a => {
    const vname = a.vendorName||'Unknown Supplier';
    if(!vendMap[vname]) vendMap[vname]={ name:vname, balance:0, paid:0 };
    vendMap[vname].balance += Number(a.balance);
  });
  // AP payments settle both types
  (window.DB.apPayments||[]).forEach(p => {
    if(vendMap[p.vendorName]) vendMap[p.vendorName].paid += Number(p.amount);
  });
  Object.values(vendMap).forEach(v => { v.netBalance = v.balance - v.paid; });
  // Only return vendors with activity
  return Object.fromEntries(Object.entries(vendMap).filter(([,v])=>v.balance>0||v.paid>0));
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
};
