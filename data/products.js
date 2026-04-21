/* ================================================
   NaMašinky.tech – Produktová data
   Přidání nového produktu = jeden záznam v poli.
   ================================================

   Kategorie (category):   "h0" | "tt" | "n" | "various"
   Tagy (tags, pole):      "buildings" | "lighting" | "track" | "vegetation" | "vehicles"

   image:   images/products/<id>.jpg  — jen karta produktu, doporučeno 400×300 px (4:3)

   gallery: pole objektů { thumb, full }
            thumb → galerie grid (střední, bez ořezu)  — doporučeno 800×600 px
            full  → lightbox + hlavní foto na stránce  — doporučeno 1400×1050 px
            Příklad:
            gallery: [
              { thumb: 'images/products/h0-001-g1.jpg', full: 'images/products/h0-001-f1.jpg' },
              { thumb: 'images/products/h0-001-g2.jpg', full: 'images/products/h0-001-f2.jpg' }
            ]

   ================================================ */

var products = [

  /* ────────── H0 – Měřítko 1:87 ────────── */
  {
    id:          "h0-001",
    category:    "h0",
    title:       "Stavební buňky",
    description: "Modulární buňky v patrové nebo přízemní variantě — ideální pro staveniště nebo zázemí nádraží. S možností osvětlení interiéru.",
    price:       "od XXX",
    priceNote:   "dle varianty",
    tags:        ["buildings", "lighting"],
    image:       "images/products/h0-001.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-001/"
  },
  {
    id:          "h0-002",
    category:    "h0",
    title:       "Barely uzavřené",
    description: "Uzavřené barely pro průmyslové areály, sklady nebo chemické závody. Dodávka po 10 ks, barvy na přání.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/H0-002.jpg",
    gallery:     [
      { thumb: 'images/products/H0-002-g1.jpg', full: 'images/products/H0-002-f1.jpg' },
      { thumb: 'images/products/H0-002-g2.jpg', full: 'images/products/H0-002-f2.jpg' }
    ],
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-002/"
  },
  {
    id:          "h0-003",
    category:    "h0",
    title:       "Europaleta",
    description: "Perfektní doplněk nákladišť, skladů a výrobních hal. Různě poskládané a natočené působí na kolejišti přirozeně.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/h0-003.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-003/"
  },
  {
    id:          "h0-004",
    category:    "h0",
    title:       "Špulky elektro kabely",
    description: "Typický prvek elektrických rozvodišť a průmyslových zón. Vhodné i do zázemí nádraží nebo dílen.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/H0-004.jpg",
    gallery:     [
      { thumb: 'images/products/H0-004-g1.jpg', full: 'images/products/H0-004-f1.jpg' },
      { thumb: 'images/products/H0-004-g2.jpg', full: 'images/products/H0-004-f2.jpg' },
      { thumb: 'images/products/H0-004-g3.jpg', full: 'images/products/H0-004-f3.jpg' }
    ],
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-004/"
  },
  {
    id:          "h0-005",
    category:    "h0",
    title:       "Lampa pouliční",
    description: "Pouliční lampa s osvětlením přes optické vlákno — výměna LED bez demontáže celé lampy.",
    price:       "od XXX",
    priceNote:   "za kus",
    tags:        ["lighting"],
    image:       "images/products/h0-005.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-005/"
  },

  /* ────────── TT – Měřítko 1:120 ────────── */
  {
    id:          "tt-001",
    category:    "tt",
    title:       "Stavební buňky",
    description: "Modulární buňky v patrové nebo přízemní variantě — ideální pro staveniště nebo zázemí nádraží. S možností osvětlení interiéru.",
    price:       "od XXX",
    priceNote:   "dle varianty",
    tags:        ["buildings", "lighting"],
    image:       "images/products/tt-001.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-001/"
  },
  {
    id:          "tt-002",
    category:    "tt",
    title:       "Kontejner stavební",
    description: "Stavební kontejner pro sypké materiály — skvělý doplněk stavebních scén, lomů nebo zemních prací.",
    price:       "od XXX",
    priceNote:   "za kus",
    tags:        ["props"],
    image:       "images/products/tt-002.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-002/"
  },
  {
    id:          "tt-003",
    category:    "tt",
    title:       "Barely uzavřené",
    description: "Uzavřené barely pro průmyslové areály, sklady nebo chemické závody. Dodávka po 10 ks, barvy na přání.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/TT-003.jpg",
    gallery:     [
      { thumb: 'images/products/TT-003-g1.jpg', full: 'images/products/TT-003-f1.jpg' },
      { thumb: 'images/products/TT-003-g2.jpg', full: 'images/products/TT-003-f2.jpg' }
    ],
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-003/"
  },
  {
    id:          "tt-004",
    category:    "tt",
    title:       "Europaleta",
    description: "Perfektní doplněk nákladišť, skladů a výrobních hal. Různě poskládané a natočené působí na kolejišti přirozeně.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/tt-004.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-004/"
  },
  {
    id:          "tt-005",
    category:    "tt",
    title:       "Špulky elektro kabely",
    description: "Typický prvek elektrických rozvodišť a průmyslových zón. Vhodné i do zázemí nádraží nebo dílen.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/tt-005.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-005/"
  },

  /* ────────── N – Měřítko 1:160 ────────── */
  {
    id:          "n-001",
    category:    "n",
    title:       "Stavební buňky",
    description: "Modulární buňky v patrové nebo přízemní variantě — ideální pro staveniště nebo zázemí nádraží. S možností osvětlení interiéru.",
    price:       "od XXX",
    priceNote:   "dle varianty",
    tags:        ["buildings", "lighting"],
    image:       "images/products/n-001.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-001/"
  },
  {
    id:          "n-002",
    category:    "n",
    title:       "Barely uzavřené",
    description: "Uzavřené barely pro průmyslové areály, sklady nebo chemické závody. Dodávka po 10 ks, barvy na přání.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/N-002.jpg",
    gallery:     [
      { thumb: 'images/products/N-002-g1.jpg', full: 'images/products/N-002-f1.jpg' },
      { thumb: 'images/products/N-002-g2.jpg', full: 'images/products/N-002-f2.jpg' }
    ],
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-002/"
  },
  {
    id:          "n-003",
    category:    "n",
    title:       "Koncovka kolejí nárazník",
    description: "Standardní zakončení slepých kolejí a vleček. Tisknuté z PLA, vhodné pro přebarvení.",
    price:       "od XXX",
    priceNote:   "za kus",
    tags:        ["infrastructure"],
    image:       "images/products/n-003.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-003/"
  },
  {
    id:          "n-004",
    category:    "n",
    title:       "Lavička betonová",
    description: "Betonová lavička pro nástupště, parky nebo zastávky. Malý detail, který oživí každé kolejiště.",
    price:       "od XXX",
    priceNote:   "za kus",
    tags:        ["props"],
    image:       "images/products/n-004.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-004/"
  },
  {
    id:          "n-005",
    category:    "n",
    title:       "Europaleta",
    description: "Perfektní doplněk nákladišť, skladů a výrobních hal. Různě poskládané a natočené působí na kolejišti přirozeně.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/n-005.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-005/"
  },
  {
    id:          "n-006",
    category:    "n",
    title:       "Špulky elektro kabely",
    description: "Typický prvek elektrických rozvodišť a průmyslových zón. Vhodné i do zázemí nádraží nebo dílen.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/n-006.jpg",
    gallery:     [],
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-006/"
  }

];
