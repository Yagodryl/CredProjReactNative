import firebase from '../../firebase';


export default class MicroCreditDetailsService {
    static getMicroCredit(id){
        const db = firebase.database().ref();
        return db.child('/microCredits/').child(id).once('value');
    }
}