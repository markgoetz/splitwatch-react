import { firebase } from '@firebase/app';
import '@firebase/database';
import apiKey from '../env/api_key';

const config = {
  apiKey,
  authDomain: 'splitwatch-16403.firebaseapp.com',
  databaseURL: 'https://splitwatch-16403.firebaseio.com',
  projectId: 'splitwatch-16403',
  storageBucket: '',
  messagingSenderId: '465292860804'
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

/* export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); */