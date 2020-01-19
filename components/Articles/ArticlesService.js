import firebase from '../../firebase';

export default class ArticlesService {
    static getArticles(){
        const db = firebase.database().ref();
        return db.child('/articles').once('value');
    }
}