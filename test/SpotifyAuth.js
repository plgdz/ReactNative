import { authorize } from 'react-native-app-auth';

const config = {
  clientId: '94840e39f97448e38c5821444b688af6',
  clientSecret: 'daf7cf8e45aa4ad09974b131cd8c2085',
  redirectUrl: 'com.test://oath',
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
