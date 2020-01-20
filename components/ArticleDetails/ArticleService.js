import firebase from '../../firebase';

export default class ArticleService {
    static getArticle(id){
        const db = firebase.database().ref();
        return db.child('/articles/').child(id).once('value');
    }
}