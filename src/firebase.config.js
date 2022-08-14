import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDs0jpg4VxSqlo4JzYRMxgUBSvRcvjGdBs",
    authDomain: "restaurantapp-8e4f2.firebaseapp.com",
    databaseURL: "https://restaurantapp-8e4f2-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-8e4f2",
    storageBucket: "restaurantapp-8e4f2.appspot.com",
    messagingSenderId: "764686321731",
    appId: "1:764686321731:web:c0c8c4952fdc14907bacf6"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, db, firestore, storage};