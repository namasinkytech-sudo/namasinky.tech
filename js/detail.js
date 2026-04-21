(function () {

  /* ── Najdi produkt dle URL ── */
  var pathname = window.location.pathname.replace(/\/index\.html$/, '');
  var productId = pathname.split('/').filter(Boolean).pop();
  var product = (typeof products !== 'undefined')
    ? products.find(function (p) { return p.id === productId; })
    : null;

  if (!product) return;

  /* ── Pomocná funkce: absolutní src z root-relativní cesty ── */
  function src(path) { return '../../' + path; }

  /*
   * Fotky se odvozují automaticky z product.id (převedeno na UPPERCASE):
   *   Karta:    images/products/H0-002.jpg
   *   Galerie:  images/products/H0-002-g1.jpg, -g2.jpg, ...
   *   Fullscr:  images/products/H0-002-f1.jpg, -f2.jpg, ...
   *
   * product.gallery = počet galerie fotek (číslo)
   */
  var uid   = product.id.toUpperCase();
  var count = typeof product.gallery === 'number' ? product.gallery : 0;
  var base  = 'images/products/' + uid;

  var galleryItems = [];
  for (var i = 1; i <= count; i++) {
    galleryItems.push({
      thumb: base + '-g' + i + '.jpg',
      full:  base + '-f' + i + '.jpg'
    });
  }

  var lbImages  = galleryItems.map(function (g) { return g.full; });

  /* ── Lightbox ── */
  var lb        = null;
  var lbImg     = null;
  var lbPrev    = null;
  var lbNext    = null;
  var lbCounter = null;
  var lbCurrent = 0;

  function createLightbox() {
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');

    var btnClose = document.createElement('button');
    btnClose.className = 'lightbox__close';
    btnClose.setAttribute('aria-label', 'Zavřít');
    btnClose.innerHTML = '&times;';
    btnClose.addEventListener('click', closeLightbox);

    lbPrev = document.createElement('button');
    lbPrev.className = 'lightbox__prev';
    lbPrev.setAttribute('aria-label', 'Předchozí');
    lbPrev.innerHTML = '&#8249;';
    lbPrev.addEventListener('click', function () { showImage(lbCurrent - 1); });

    lbNext = document.createElement('button');
    lbNext.className = 'lightbox__next';
    lbNext.setAttribute('aria-label', 'Další');
    lbNext.innerHTML = '&#8250;';
    lbNext.addEventListener('click', function () { showImage(lbCurrent + 1); });

    lbImg = document.createElement('img');
    lbImg.className = 'lightbox__img';
    lbImg.alt = product.title;

    lbCounter = document.createElement('div');
    lbCounter.className = 'lightbox__counter';

    lb.appendChild(btnClose);
    lb.appendChild(lbPrev);
    lb.appendChild(lbImg);
    lb.appendChild(lbNext);
    lb.appendChild(lbCounter);

    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLightbox();
    });

    document.body.appendChild(lb);
  }

  function openLightbox(index) {
    if (!lb) createLightbox();
    document.body.style.overflow = 'hidden';
    lb.classList.add('is-open');
    showImage(index);
  }

  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function showImage(index) {
    if (index < 0 || index >= lbImages.length) return;
    lbCurrent = index;
    lbImg.src = src(lbImages[index]);
    lbPrev.classList.toggle('is-hidden', index === 0);
    lbNext.classList.toggle('is-hidden', index === lbImages.length - 1);
    lbCounter.textContent = lbImages.length > 1
      ? (index + 1) + ' / ' + lbImages.length
      : '';
  }

  document.addEventListener('keydown', function (e) {
    if (!lb || !lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(lbCurrent - 1);
    if (e.key === 'ArrowRight') showImage(lbCurrent + 1);
  });

  /* ── Hlavní obrázek (nahoře na stránce) ── */
  var mainPlaceholder = document.querySelector('.product-main-placeholder');
  if (mainPlaceholder) {
    /* Hlavní foto = první galerie fullscreen; pokud není galerie, zkusí kartu */
    var mainSrc = galleryItems.length ? galleryItems[0].full : base + '.jpg';

    var mainImg = document.createElement('img');
    mainImg.className = 'product-main-img';
    mainImg.src = src(mainSrc);
    mainImg.alt = product.title;
    mainImg.onerror = function () {
      /* Soubor neexistuje — nechej placeholder */
      mainPlaceholder.parentNode.replaceChild(mainPlaceholder, mainImg);
    };
    if (lbImages.length > 0) {
      mainImg.style.cursor = 'zoom-in';
      mainImg.addEventListener('click', function () { openLightbox(0); });
    }
    mainPlaceholder.parentNode.replaceChild(mainImg, mainPlaceholder);
  }

  /* ── Galerie ── */
  var gallery = document.querySelector('.product-gallery');
  if (gallery) {
    gallery.innerHTML = '';
    galleryItems.forEach(function (item, i) {
      var img = document.createElement('img');
      img.src = src(item.thumb);
      img.alt = product.title + ' – foto ' + (i + 1);
      img.addEventListener('click', function () { openLightbox(i); });
      gallery.appendChild(img);
    });
  }

})();
