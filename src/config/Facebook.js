import Constants from "expo-constants";
import * as Facebook from 'expo-facebook';

const permissions = ['public_profile', 'email'];

const loginAsync = async () => {
  try {
    var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('public_profile', 'email');
firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token.
  var token = result.credential.accessToken;
 console.log(token)
  // The signed-in user info.
  var user = result.user;
});
  } catch (error){
     return Promise.reject(error);
  }
}

export const FacebookApi = {

loginAsync
    
};
