// =============================================
//  firebase-config.js
//  ⚠️  REPLACE the values below with your new
//  Firebase project credentials from
//  console.firebase.google.com → Project Settings
// =============================================

const firebaseConfig = {
  apiKey:            "AIzaSyBXyFyFE9Okgg-291V4OuNpJdaTkmN5LbQ",
  authDomain:        "inventory-app-8f931.firebaseapp.com",
  projectId:         "inventory-app-8f931",
  storageBucket:     "inventory-app-8f931.firebasestorage.app",
  messagingSenderId: "958706191375",
  appId:             "1:958706191375:web:2184ab6c5cddbf10a0e77a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db       = firebase.firestore();
const DOC_REF  = db.collection('inventory').doc('data');
