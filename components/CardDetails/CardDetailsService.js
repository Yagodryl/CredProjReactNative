import firebase from '../../firebase';


export default class CardDetailsService {
    static getCreditCard(id){
        const db = firebase.database().ref();
        return db.child('/creditCards/').child(id).once('value');
    }
}