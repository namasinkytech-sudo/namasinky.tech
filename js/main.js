/* ================================================
   NaMašinky.tech – main.js
   Renderování produktových karet + filtrování.
   ================================================ */

const TAG_LABELS = {
  buildings:  { label: 'Buildings',             emoji: '🏠' },
  lighting:   { label: 'Lighting',              emoji: '💡' },
  track:      { label: 'Track & Surroundings',  emoji: '🛤️' },
  vegetation: { label: 'Vegetation & Terrain',  emoji: '🌳' },
  vehicles:   { label: 'Vehicles & Accessories',emoji: '🚗' }
};

/**
 * Vytvoří HTML pro jednu produktovou kartu.
 */
function createCard(product) {
  const tagsHTML = product.tags.map(function(tag) {
    var t = TAG_LABELS[tag] || { label: tag, emoji: '' };
    return '<span class="tag">' + t.emoji + ' ' + t.label + '</span>';
  }).join('');

  var subject  = encodeURIComponent('Poptávka: ' + product.title);
  var mailto   = 'mailto:' + product.email + '?subject=' + subject;

  return (
    '<article class="product-card">' +
      '<div class="product-card__image">' +
        '<img src="' + product.image + '" alt="' + product.title + '" loading="lazy"' +
             ' onerror="this.parentElement.classList.add(\'no-image\')">' +
      '</div>' +
      '<div class="product-card__body">' +
        '<div class="product-card__tags">' + tagsHTML + '</div>' +
        '<h3 class="product-card__title">' + product.title + '</h3>' +
        '<p class="product-card__desc">' + product.description + '</p>' +
        '<div class="product-card__footer">' +
          '<div class="product-card__price">' +
            '<span class="price">' + product.price + ' Kč</span>' +
            '<span class="price-note">' + product.priceNote + '</span>' +
          '</div>' +
          '<a href="' + mailto + '" class="btn-inquire">Poptejte</a>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}

/**
 * Zobrazí pole produktů v gridu.
 */
function showProducts(items) {
  var grid = document.getElementById('products-grid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML =
      '<div class="empty-state">' +
        '<p>V této kategorii zatím nejsou žádné produkty.</p>' +
      '</div>';
  } else {
    grid.innerHTML = items.map(createCard).join('');
  }
}

/**
 * Inicializace stránky kategorie.
 */
document.addEventListener('DOMContentLoaded', function() {
  var category = document.body.dataset.category;
  if (!category) return;

  /* Všechny produkty aktuální kategorie */
  var categoryProducts = products.filter(function(p) {
    return p.category === category;
  });

  /* Výchozí zobrazení – vše */
  showProducts(categoryProducts);

  /* Filtrování podle tagu */
  var filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var tag = btn.dataset.tag;
      var filtered = tag === 'all'
        ? categoryProducts
        : categoryProducts.filter(function(p) { return p.tags.indexOf(tag) !== -1; });

      showProducts(filtered);
    });
  });
});
