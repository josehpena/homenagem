import { initializeApp } from 'firebase/app';
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB7TmQ8kivJBFpvmSznznfXiGo7ZgB4HLQ",
    authDomain: "homenagem-a91bf.firebaseapp.com",
    projectId: "homenagem-a91bf",
    storageBucket: "homenagem-a91bf.appspot.com",
    messagingSenderId: "124070778691",
    appId: "1:124070778691:web:518efcc1abc7e01665c1f6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, app, db };
