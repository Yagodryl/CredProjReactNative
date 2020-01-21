import firebase from '../../firebase';


export default class CreditDetailsService {
    static getCredit(id){
        const db = firebase.database().ref();
        return db.child('/credits/').child(id).once('value');
    }
}