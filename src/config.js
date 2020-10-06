import firebase from 'firebase'
import Rebase from 're-base'

const firebaseInfo = firebase.initializeApp({
    apiKey: "AIzaSyDguEpC4a5cW891AzqQAdXBftKqelOC1Vc",
    authDomain: "quiz-game-udemy.firebaseapp.com",
    databaseURL: "https://quiz-game-udemy.firebaseio.com",
    projectId: "quiz-game-udemy",
    storageBucket: "quiz-game-udemy.appspot.com",
    messagingSenderId: "712036837624",
    appId: "1:712036837624:web:8c15028225abba4436b30d"
})

const db = firebase.database(firebaseInfo)
const config = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'twitter': new firebase.auth.TwitterAuthProvider(),
}

export const auth = firebaseInfo.auth()
export default config
