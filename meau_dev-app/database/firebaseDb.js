import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD5hDApZn8S8ICnmD-lU3ozDxbKIxSxy1Y",
  authDomain: "meau-dev.firebaseapp.com",
  projectId: "meau-dev",
  storageBucket: "meau-dev.appspot.com",
  messagingSenderId: "979320890263",
  appId: "1:979320890263:web:c1143b6ace977c035cdad2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;