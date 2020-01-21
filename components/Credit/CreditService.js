import firebase from '../../firebase';


export default class CreditService {
    static getListCredit(){
        const db = firebase.database().ref();
        return db.child('/credits').once('value');
        
    }
}