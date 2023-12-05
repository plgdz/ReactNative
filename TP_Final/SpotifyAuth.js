import { authorize } from 'react-native-app-auth';

const config = {
  clientId: '',
  clientSecret: '',
  redirectUrl: 'votre nom de package à vous://oath',
  scopes: ['user-read-email', 'user-read-private'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

export const authenticateSpotify = async () => {
  try {
    console.log('demarrer l'authentification...');
    const result = await authorize(config);
    console.log('resultat:', result);
    return result.accessToken;
  } catch (error) {
    console.error('erreur:', error);
  }
};
