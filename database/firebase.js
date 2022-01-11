import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/';

const firebaseConfig = {
  apiKey: "AIzaSyBdADpqqBgDvh2vMUYq3CId0tfHpyzfhjE",
  authDomain: "react-native-firebase-2f1df.firebaseapp.com",
  projectId: "react-native-firebase-2f1df",
  storageBucket: "react-native-firebase-2f1df.appspot.com",
  messagingSenderId: "269658422154",
  appId: "1:269658422154:web:41e2b958a7ac1ea9f8e673"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default {app, db};


