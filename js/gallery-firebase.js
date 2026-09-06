import {
  collection,
  query,
  orderBy,
  getDocs
} from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js';

import {
  firebaseAvailable,
  firestore
} from './firebase-loader.js';

async function esperarFirebase(timeout = 8000) {
  const inicio = Date.now();

  while (Date.now() - inicio < timeout) {
    if (firebaseAvailable && firestore) {
      return true;
    }

    await new Promise(resolve => setTimeout(resolve, 100));
  }

  return false;
}

async function cargarGaleriaFirebase() {
  const conectado = await esperarFirebase();
  const gallery = document.getElementById('galleryContainer');

  if (!conectado || !gallery) {
    console.warn('No se pudo cargar la galería desde Firebase.');
    return;
  }

  try {
    const consulta = query(
      collection(firestore, 'media'),
      orderBy('createdAt', 'desc')
    );

    const snapshot = await getDocs(consulta);

    if (snapshot.empty) {
      return;
    }

    gallery.innerHTML = '';

    snapshot.forEach(docSnap => {
      const item = docSnap.data();

      const article = document.createElement('article');
      article.className = 'media-item';

      if (item.type === 'image') {
        const img = document.createElement('img');
        img.src = item.publicUrl;
        img.alt = item.title || 'Proyecto';
        img.loading = 'lazy';
        article.appendChild(img);
      }

      if (item.type === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.preload = 'metadata';

        if (item.thumbnailUrl) {
          video.poster = item.thumbnailUrl;
        }

        const source = document.createElement('source');
        source.src = item.publicUrl;
        source.type = 'video/mp4';

        video.appendChild(source);
        article.appendChild(video);
      }

      const content = document.createElement('div');
      content.className = 'media-content';

      const title = document.createElement('h3');
      title.textContent = item.title || '';

      const description = document.createElement('p');
      description.textContent = item.description || '';

      content.appendChild(title);
      content.appendChild(description);
      article.appendChild(content);
      gallery.appendChild(article);
    });

    console.log(`Galería Firebase cargada: ${snapshot.size} elementos`);
  } catch (error) {
    console.error('Error cargando la galería Firebase:', error);
  }
}

cargarGaleriaFirebase();