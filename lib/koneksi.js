import firebase from 'firebase'
import 'firebase/firestore'

// export const loadDB = async() =>{
//     try {
//           firebase.initializeApp({
//             apiKey: "AIzaSyCNB4U-oYLiRN5ZkHIOW3RrgfttQ3SrqhA",
//             authDomain: "tanipintar-cbaf6.firebaseapp.com",
//             databaseURL: "https://tanipintar-cbaf6.firebaseio.com",
//             projectId: "tanipintar-cbaf6",
//             storageBucket: "tanipintar-cbaf6.appspot.com",
//             messagingSenderId: "910063791567",
//             appId: "1:910063791567:web:950b4478fb13c75071f6ba"
//           });
//     } catch (error) {
//         console.log(error)
//         if (!/already exists/.test(error.message)) {
//             console.error('Firebase initialization error', error.stack);
//           }
//     }
//     return firebase;
// }
if (!firebase.apps.length) {
  firebase.initializeApp({
      apiKey: "AIzaSyCNB4U-oYLiRN5ZkHIOW3RrgfttQ3SrqhA",
      authDomain: "tanipintar-cbaf6.firebaseapp.com",
      databaseURL: "https://tanipintar-cbaf6.firebaseio.com",
      projectId: "tanipintar-cbaf6",
      storageBucket: "tanipintar-cbaf6.appspot.com",
      messagingSenderId: "910063791567",
      appId: "1:910063791567:web:950b4478fb13c75071f6ba"
    });
}
export default firebase