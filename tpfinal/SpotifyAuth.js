import { authorize } from 'react-native-app-auth';

const config = {
  clientId: 'af9c96f22e4b41aba9e605a7cc8d627e',
  clientSecret: '2ffa6669cfab44e1ad07112af64ac583',
  redirectUrl: 'com.tpfinal://oath',
  scopes: ['user-read-email', 'user-read-private'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

export const authenticateSpotify = async () => {
  try {
    console.log("demarrer l'authentification...");
    const result = await authorize(config);
    console.log('resultat:', result);
    return result.accessToken;
  } catch (error) {
    console.error('erreur:', error);
  }
};
