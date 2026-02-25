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
    title:       "Nástupištní přístřešek",
    description: "Jednoduchý přístřešek pro menší zastávku nebo průjezdní stanici. Snadná montáž.",
    price:       180,
    priceNote:   "orientační cena",
    tags:        ["track", "buildings"],
    image:       "images/products/h0-002.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-002/"
  },
  {
    id:          "h0-003",
    category:    "h0",
    title:       "Plynová lampa – 2 ks",
    description: "Ozdobná plynová lampa na žulovém podstavci. Sada 2 kusů.",
    price:       150,
    priceNote:   "orientační cena",
    tags:        ["lighting"],
    image:       "images/products/h0-003.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-003/"
  },
  {
    id:          "h0-004",
    category:    "h0",
    title:       "Kamenná zídka – 30 cm",
    description: "Opěrná zídka z lomového kamene, délka 30 cm. Ideální pro svahy a zahrady.",
    price:       120,
    priceNote:   "orientační cena",
    tags:        ["vegetation"],
    image:       "images/products/h0-004.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/h0-004/"
  },

  /* ────────── TT – Měřítko 1:120 ────────── */
  {
    id:          "tt-001",
    category:    "tt",
    title:       "Tovární hala",
    description: "Průmyslová továrna s rampou a nakládací plošinou. Ideální pro průmyslové scény.",
    price:       420,
    priceNote:   "orientační cena",
    tags:        ["buildings"],
    image:       "images/products/tt-001.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-001/"
  },
  {
    id:          "tt-002",
    category:    "tt",
    title:       "Závorová budka",
    description: "Malá budka pro přejezdového hlídače. Doplněk k závoře nebo přejezdu.",
    price:       130,
    priceNote:   "orientační cena",
    tags:        ["buildings", "track"],
    image:       "images/products/tt-002.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-002/"
  },
  {
    id:          "tt-003",
    category:    "tt",
    title:       "Dřevěný plot – 25 cm",
    description: "Rustikální dřevěný laťkový plot, délka 25 cm. Vhodný pro zahrádky a dvorky.",
    price:       95,
    priceNote:   "orientační cena",
    tags:        ["vegetation"],
    image:       "images/products/tt-003.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/tt-003/"
  },

  /* ────────── N – Měřítko 1:160 ────────── */
  {
    id:          "n-001",
    category:    "n",
    title:       "Semafor dvouramenný",
    description: "Klasický dvouramenný semafor pro stanice a výhybky. Přesné měřítko N.",
    price:       120,
    priceNote:   "orientační cena",
    tags:        ["lighting", "track"],
    image:       "images/products/n-001.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-001/"
  },
  {
    id:          "n-002",
    category:    "n",
    title:       "Zarážedlo – 2 ks",
    description: "Koncová zarážedla pro slepé koleje. Sada 2 kusů s základnou.",
    price:       85,
    priceNote:   "orientační cena",
    tags:        ["track"],
    image:       "images/products/n-002.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-002/"
  },
  {
    id:          "n-003",
    category:    "n",
    title:       "Venkovský kostelík",
    description: "Jednolodní kostelík s věžičkou, vhodný pro vesnice a malá městečka.",
    price:       310,
    priceNote:   "orientační cena",
    tags:        ["buildings"],
    image:       "images/products/n-003.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/n-003/"
  },

  /* ────────── Různé ────────── */
  {
    id:          "var-001",
    category:    "various",
    title:       "Set figurek – dělníci",
    description: "6 různých figurek dělníků v pracovním oděvu. Vhodné pro všechna měřítka HO.",
    price:       220,
    priceNote:   "orientační cena",
    tags:        ["vehicles"],
    image:       "images/products/var-001.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/var-001/"
  },
  {
    id:          "var-002",
    category:    "various",
    title:       "Pouliční lavičky – 3 ks",
    description: "Klasické kovové lavičky s dřevěnými latěmi. Sada 3 kusů.",
    price:       110,
    priceNote:   "orientační cena",
    tags:        ["track", "vegetation"],
    image:       "images/products/var-002.jpg",
    email:       "namasinky.tech@gmail.com",
    url:         "products/var-002/"
  }

];
