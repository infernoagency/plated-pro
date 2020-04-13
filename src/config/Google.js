import Constants from "expo-constants";
import logInAsync from 'expo-google-app-auth';
const scopes = ['profile', 'email'];


const loginAsync = async () => {
  try {
    const result = await logInAsync({
       androidClientId: Constants.manifest.extra.googleAppId,
       iosClientId: Constants.manifest.extra.googleAppId.ios,
       scopes
    });


    if (result.type === 'success') {
      console.log(result.accessToken);
      return Promise.resolve(result.accessToken);
    }


    return Promise.reject('No success');
  } catch (error) {
    return Promise.reject(error);
  }
};


export const GoogleApi = {
  loginAsync,
};