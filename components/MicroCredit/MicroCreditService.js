import firebase from '../../firebase';


export default class MicroCreditService {
    static getMicroCreditList(){
        const db = firebase.database().ref();
        return db.child('/microCredits').once('value');
    }
}