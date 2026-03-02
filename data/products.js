/* ================================================
   NaMašinky.tech – Produktová data
   Přidání nového produktu = jeden záznam v poli.
   ================================================

   Kategorie (category):   "h0" | "tt" | "n" | "various"
   Tagy (tags, pole):      "buildings" | "lighting" | "track" | "vegetation" | "vehicles"
   Obrázky:                images/products/<id>.jpg  (doporučeno 800×600 px)

   ================================================ */

var products = [

  /* ────────── H0 – Měřítko 1:87 ────────── */
  {
    id:          "h0-001",
    category:    "h0",
    title:       "Stavební buňky",
    description: "Modulární buňky v patrové nebo přízemní variantě. Sestavený model nebo stavebnice, s možností osvětlení.",
    price:       "od XXX",
    priceNote:   "dle varianty",
    tags:        ["buildings", "lighting"],
    image:       "images/products/h0-001.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-001/"
  },
  {
    id:          "h0-002",
    category:    "h0",
    title:       "Barely uzavřené",
    description: "Uzavřené barely. Dodávka po 10 ks, barvy dle požadavku zákazníka.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/h0-002.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-002/"
  },
  {
    id:          "h0-003",
    category:    "h0",
    title:       "Europaleta",
    description: "Europalety – dodávka po 10 nebo 20 ks.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/h0-003.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-003/"
  },
  {
    id:          "h0-004",
    category:    "h0",
    title:       "Špulky elektro kabely",
    description: "Špulky elektro kabelů – dodávka po 10 nebo 20 ks.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/h0-004.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-004/"
  },
  {
    id:          "h0-005",
    category:    "h0",
    title:       "Lampa pouliční",
    description: "Pouliční lampa s osvětlením pomocí optického vlákna na LED diodě. Výměna LED bez výměny celé lampy.",
    price:       "od XXX",
    priceNote:   "za kus",
    tags:        ["lighting"],
    image:       "images/products/h0-005.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-005/"
  },

  /* ────────── TT – Měřítko 1:120 ────────── */
  {
    id:          "tt-001",
    category:    "tt",
    title:       "Stavební buňky",
    description: "Modulární buňky v patrové nebo přízemní variantě. Sestavený model nebo stavebnice, s možností osvětlení.",
    price:       "od XXX",
    priceNote:   "dle varianty",
    tags:        ["buildings", "lighting"],
    image:       "images/products/tt-001.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-001/"
  },
  {
    id:          "tt-002",
    category:    "tt",
    title:       "Kontejner stavební",
    description: "Stavební kontejner určený pro sypké materiály.",
    price:       "od XXX",
    priceNote:   "za kus",
    tags:        ["props"],
    image:       "images/products/tt-002.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-002/"
  },
  {
    id:          "tt-003",
    category:    "tt",
    title:       "Barely uzavřené",
    description: "Uzavřené barely. Dodávka po 10 ks, barvy dle požadavku zákazníka.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/tt-003.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-003/"
  },
  {
    id:          "tt-004",
    category:    "tt",
    title:       "Europaleta",
    description: "Europalety – dodávka po 10 nebo 20 ks.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/tt-004.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-004/"
  },
  {
    id:          "tt-005",
    category:    "tt",
    title:       "Špulky elektro kabely",
    description: "Špulky elektro kabelů – dodávka po 10 nebo 20 ks.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/tt-005.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-005/"
  },

  /* ────────── N – Měřítko 1:160 ────────── */
  {
    id:          "n-001",
    category:    "n",
    title:       "Stavební buňky",
    description: "Modulární buňky v patrové nebo přízemní variantě. Sestavený model nebo stavebnice, s možností osvětlení.",
    price:       "od XXX",
    priceNote:   "dle varianty",
    tags:        ["buildings", "lighting"],
    image:       "images/products/n-001.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-001/"
  },
  {
    id:          "n-002",
    category:    "n",
    title:       "Barely uzavřené",
    description: "Uzavřené barely. Dodávka po 10 ks, barvy dle požadavku zákazníka.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/n-002.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-002/"
  },
  {
    id:          "n-003",
    category:    "n",
    title:       "Koncovka kolejí nárazník",
    description: "Nárazník na konec koleje.",
    price:       "od XXX",
    priceNote:   "za kus",
    tags:        ["infrastructure"],
    image:       "images/products/n-003.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-003/"
  },
  {
    id:          "n-004",
    category:    "n",
    title:       "Lavička betonová",
    description: "Betonová lavička pro oživení každého kolejiště.",
    price:       "od XXX",
    priceNote:   "za kus",
    tags:        ["props"],
    image:       "images/products/n-004.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-004/"
  },
  {
    id:          "n-005",
    category:    "n",
    title:       "Europaleta",
    description: "Europalety – dodávka po 10 nebo 20 ks.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/n-005.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-005/"
  },
  {
    id:          "n-006",
    category:    "n",
    title:       "Špulky elektro kabely",
    description: "Špulky elektro kabelů – dodávka po 10 nebo 20 ks.",
    price:       "od XXX",
    priceNote:   "za 10 ks",
    tags:        ["props"],
    image:       "images/products/n-006.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-006/"
  }

];
