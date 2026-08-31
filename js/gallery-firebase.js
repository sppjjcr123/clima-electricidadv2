import {
  collection,
  getDocs
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

import {
  firebaseAvailable,
  firestore
} from './firebase-loader.js';

setTimeout(async () => {

  if (!firebaseAvailable) {
    alert('❌ Firebase NO conectado');
    return;
  }

  try {

    const snapshot = await getDocs(
      collection(firestore, 'media')
    );

    alert(
      `✅ Documentos encontrados: ${snapshot.size}`
    );

    console.log(snapshot);

  } catch (error) {

    console.error(error);

    alert(
      '❌ Error leyendo Firestore'
    );
  }

}, 2000);