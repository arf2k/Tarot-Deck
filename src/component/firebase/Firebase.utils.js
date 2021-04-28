import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
     apiKey: "AIzaSyDr-ZO9s5nFvzQNenoQ1rCuZ-JdZyLUmQo",
     authDomain: "tarot-app-a2645.firebaseapp.com",
     projectId: "tarot-app-a2645",
     storageBucket: "tarot-app-a2645.appspot.com",
     messagingSenderId: "619587009780",
     appId: "1:619587009780:web:c7ae82cfb3ce452cf4b2a1",
     measurementId: "G-T0RY9ZGBVZ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);


// export const createUserProfileDocument = async (userAuth, additionalData) => {
//      if(!userAuth) return;

//      const userRef = firestore.doc(`users/${userAuth.uid}`)
//      const snapshot = await userRef.get()
     
//      if(!snapshot.exists) {
//           const { displayName, email } = userAuth;
//           const createdAt = new Date();
          
//           try{
//                await userRef.set({
//                     displayName,
//                     email,
//                     createdAt,
//                     ...additionalData,
//                })
//           } catch (error) {
//                console.log("error creating user", error.message)
//           }
//      }
//      return userRef
// }

// export const getCurrentUser = () => {
//      return new Promise((resolve, reject) => {
//        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
//          unsubscribe();
//          resolve(userAuth);
//        }, reject);
//      });
//    };






export default firebase;
