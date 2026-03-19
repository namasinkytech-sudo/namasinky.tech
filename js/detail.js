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

  /* ── Sestavení seznamu všech obrázků pro lightbox ── */
  var allImages = [];
  if (product.image) allImages.push(product.image);
  if (product.gallery && product.gallery.length) {
    product.gallery.forEach(function (g) { allImages.push(g); });
  }

  /* ── Lightbox ── */
  var lb = null;
  var lbImg = null;
  var lbPrev = null;
  var lbNext = null;
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
    if (index < 0 || index >= allImages.length) return;
    lbCurrent = index;
    lbImg.src = src(allImages[index]);
    lbPrev.classList.toggle('is-hidden', index === 0);
    lbNext.classList.toggle('is-hidden', index === allImages.length - 1);
    if (allImages.length > 1) {
      lbCounter.textContent = (index + 1) + ' / ' + allImages.length;
    } else {
      lbCounter.textContent = '';
    }
  }

  document.addEventListener('keydown', function (e) {
    if (!lb || !lb.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(lbCurrent - 1);
    if (e.key === 'ArrowRight') showImage(lbCurrent + 1);
  });

  /* ── Hlavní obrázek ── */
  var mainPlaceholder = document.querySelector('.product-main-placeholder');
  if (mainPlaceholder) {
    if (product.image) {
      var mainImg = document.createElement('img');
      mainImg.className = 'product-main-img';
      mainImg.src = src(product.image);
      mainImg.alt = product.title;
      mainImg.style.cursor = 'zoom-in';
      mainImg.addEventListener('click', function () { openLightbox(0); });
      mainPlaceholder.parentNode.replaceChild(mainImg, mainPlaceholder);
    }
    /* Pokud fotka ještě není, placeholder zůstane */
  }

  /* ── Galerie ── */
  var gallery = document.querySelector('.product-gallery');
  if (gallery) {
    gallery.innerHTML = '';
    if (product.gallery && product.gallery.length > 0) {
      product.gallery.forEach(function (imgPath, i) {
        var img = document.createElement('img');
        img.src = src(imgPath);
        img.alt = product.title + ' – foto ' + (i + 2);
        /* Index v lightboxu: 0 = hlavní, galerie začíná od 1 */
        var lbIndex = product.image ? i + 1 : i;
        img.addEventListener('click', function () { openLightbox(lbIndex); });
        gallery.appendChild(img);
      });
    }
    /* Prázdná galerie = skrytý grid (bez placeholderů) */
  }

})();
