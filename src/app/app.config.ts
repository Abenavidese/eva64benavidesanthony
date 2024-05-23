import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"eva64benavidesanthony","appId":"1:974985957751:web:9ac5060080c77cbcf8d172","storageBucket":"eva64benavidesanthony.appspot.com","apiKey":"AIzaSyCq8O-TxMF83qd8hrgdDEaaGSF7yJWnNgM","authDomain":"eva64benavidesanthony.firebaseapp.com","messagingSenderId":"974985957751"})), provideFirestore(() => getFirestore())]
};
