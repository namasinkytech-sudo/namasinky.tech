/* ================================================
   NaMašinky.tech – Produktová data
   Přidání nového produktu = jeden záznam v poli.
   ================================================

   Kategorie (category):   "h0" | "tt" | "n" | "various"
   Tagy (tags, pole):      "buildings" | "lighting" | "track" | "vegetation" | "vehicles"
                           "props" | "infrastructure"

   Fotky (automatické pojmenování dle ID produktu):
     Karta:    images/products/H0-002.jpg
     Galerie:  images/products/H0-002-g1.jpg, H0-002-g2.jpg, ...
     Fullscr:  images/products/H0-002-f1.jpg, H0-002-f2.jpg, ...

   gallery:  počet galerie fotek (číslo). 0 = žádná galerie.
             Soubory musí existovat ve správném pojmenování výše.

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
    tags:        ["buildings"],
    gallery:     0,
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-001/"
  },
  {
    id:          "h0-002",
    category:    "h0",
    title:       "Barely uzavřené",
    description: "Uzavřené barely pro průmyslové areály, sklady nebo chemické závody. Dodávka po 20 ks, barvy na přání (červená, zelená, modrá, šedá, černá).",
    price:       "100",
    priceNote:   "za 20 ks",
    tags:        ["props"],
    gallery:     2,
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
    gallery:     0,
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-003/"
  },
  {
    id:          "h0-004",
    category:    "h0",
    title:       "Špulky elektro kabely",
    description: "Typický prvek elektrických rozvodišť a průmyslových zón. Vhodné i do zázemí nádraží nebo dílen.",
    price:       "100",
    priceNote:   "za 15 ks",
    tags:        ["props"],
    gallery:     3,
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
    gallery:     0,
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-005/"
  },
  {
    id:          "h0-006",
    category:    "h0",
    title:       "Lodní kontejner",
    description: "Klasický lodní kontejner pro přístaviště, nákladiště nebo průmyslové areály. Barvy: červená, zelená, modrá, šedá — nebo jiná po dohodě.",
    price:       "30",
    priceNote:   "/ ks",
    tags:        ["props"],
    gallery:     3,
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-006/"
  },

  /* ────────── TT – Měřítko 1:120 ────────── */
  {
    id:          "tt-001",
    category:    "tt",
    title:       "Stavební buňky",
    description: "Modulární buňky v patrové nebo přízemní variantě — ideální pro staveniště nebo zázemí nádraží. S možností osvětlení interiéru.",
    price:       "od XXX",
    priceNote:   "dle varianty",
    tags:        ["buildings"],
    gallery:     0,
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
    gallery:     0,
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-002/"
  },
  {
    id:          "tt-003",
    category:    "tt",
    title:       "Barely uzavřené",
    description: "Uzavřené barely pro průmyslové areály, sklady nebo chemické závody. Dodávka po 25 ks, barvy na přání (červená, zelená, modrá, šedá, černá).",
    price:       "100",
    priceNote:   "za 25 ks",
    tags:        ["props"],
    gallery:     2,
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
    gallery:     0,
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-004/"
  },
  {
    id:          "tt-005",
    category:    "tt",
    title:       "Špulky elektro kabely",
    description: "Typický prvek elektrických rozvodišť a průmyslových zón. Vhodné i do zázemí nádraží nebo dílen.",
    price:       "100",
    priceNote:   "za 20 ks",
    tags:        ["props"],
    gallery:     0,
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-005/"
  },
  {
    id:          "tt-006",
    category:    "tt",
    title:       "Lodní kontejner",
    description: "Klasický lodní kontejner pro přístaviště, nákladiště nebo průmyslové areály. Barvy: červená, zelená, modrá, šedá — nebo jiná po dohodě.",
    price:       "25",
    priceNote:   "/ ks",
    tags:        ["props"],
    gallery:     8,
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-006/"
  },

  /* ────────── N – Měřítko 1:160 ────────── */
  {
    id:          "n-001",
    category:    "n",
    title:       "Stavební buňky",
    description: "Modulární buňky v patrové nebo přízemní variantě — ideální pro staveniště nebo zázemí nádraží. S možností osvětlení interiéru.",
    price:       "od XXX",
    priceNote:   "dle varianty",
    tags:        ["buildings"],
    gallery:     0,
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-001/"
  },
  {
    id:          "n-002",
    category:    "n",
    title:       "Barely uzavřené",
    description: "Uzavřené barely pro průmyslové areály, sklady nebo chemické závody. Dodávka po 30 ks, barvy na přání (červená, zelená, modrá, šedá, černá).",
    price:       "100",
    priceNote:   "za 30 ks",
    tags:        ["props"],
    gallery:     2,
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
    gallery:     0,
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
    gallery:     0,
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
    gallery:     0,
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-005/"
  },
  {
    id:          "n-006",
    category:    "n",
    title:       "Špulky elektro kabely",
    description: "Typický prvek elektrických rozvodišť a průmyslových zón. Vhodné i do zázemí nádraží nebo dílen.",
    price:       "100",
    priceNote:   "za 25 ks",
    tags:        ["props"],
    gallery:     0,
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-006/"
  },
  {
    id:          "n-007",
    category:    "n",
    title:       "Lodní kontejner",
    description: "Klasický lodní kontejner pro přístaviště, nákladiště nebo průmyslové areály. Barvy: červená, zelená, modrá, šedá — nebo jiná po dohodě.",
    price:       "20",
    priceNote:   "/ ks",
    tags:        ["props"],
    gallery:     9,
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-007/"
  }

];
