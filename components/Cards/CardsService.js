import firebase from '../../firebase';


export default class CardsService {
    static getListCards(){
        const db = firebase.database().ref();
        return db.child('/creditCards').once('value');
        
    }
}