export let firebaseAvailable = false;
export let firebaseApp = null;
export let auth = null;
export let firestore = null;
export let storage = null;

(async function initFirebaseLoader() {
  try {
    const cfgModule = await import('./firebase-config.js').catch(() => ({
      default: null
    }));

    const firebaseConfig =
      cfgModule.default || cfgModule.firebaseConfig || null;

    if (!firebaseConfig) {
      throw new Error('No firebase config found');
    }

    const { initializeApp } = await import(
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
    );

    const { getAuth } = await import(
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js'
    );

    const { initializeFirestore } = await import(
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js'
    );

    const { getStorage } = await import(
      'https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js'
    );

    firebaseApp = initializeApp(firebaseConfig);

    auth = getAuth(firebaseApp);

    firestore = initializeFirestore(firebaseApp, {
      experimentalAutoDetectLongPolling: true
    });

    storage = getStorage(firebaseApp);

    firebaseAvailable = true;

    console.log('✅ Firebase conectado correctamente');
  } catch (error) {
    console.warn(
      '⚠️ Firebase no configurado. Modo demo activo.',
      error
    );

    firebaseAvailable = false;
    firebaseApp = null;
    auth = null;
    firestore = null;
    storage = null;
  }
})();