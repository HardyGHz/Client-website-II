export const BUSINESS = {
  name: 'Optica Medicală Florești',
  phoneDisplay: '0769 636 474',
  phoneTel: '+40769636474',
  address: 'Strada Cetății, Florești',
  fullAddress: 'Strada Cetății, 407280 Florești, România',
  mapsUrl: 'https://www.google.com/maps/place/Optica+medicala+Flore%C8%99ti/@46.7410163,23.4953218,18z/data=!4m6!3m5!1s0x47490f27d76e0c47:0x206d4ea44a83cb18!8m2!3d46.7410163!4d23.4961185!16s%2Fg%2F11fktdxc63',
  rating: 4.9,
  reviewCount: 35,
  hours: {
    weekdays: '09:00–17:00',
    saturday: '10:00–14:00',
    sunday: 'Închis',
  },
} as const

export const SERVICES = [
  {
    index: '01',
    title: 'Consultație optometrică',
    description: 'O evaluare atentă, cu explicații clare și timp pentru întrebările dumneavoastră.',
    detail: 'Programare telefonică',
  },
  {
    index: '02',
    title: 'Rame de vedere și de soare',
    description: 'Modele diferite, alese împreună în funcție de fizionomie, stil și confort.',
    detail: 'Selecție în magazin',
  },
  {
    index: '03',
    title: 'Lentile pentru nevoile dumneavoastră',
    description: 'Recomandări explicate simplu, de la utilizarea zilnică la cerințe specifice.',
    detail: 'Ofertă personalizată',
  },
  {
    index: '04',
    title: 'Reglaje și reparații',
    description: 'Ajustări, reglaje și înlocuirea elementelor uzate pentru ochelari confortabili.',
    detail: 'Evaluare în magazin',
  },
] as const

export const REVIEWS = [
  {
    author: 'Ema R.',
    date: 'acum 7 luni',
    text: 'Personal amabil, prețuri excelente și lentile de calitate. Ramele alese perfect în funcție de forma feței.',
  },
  {
    author: 'Andreea Diana',
    date: 'acum un an',
    text: 'Produse de calitate și diversificate, profesionalism, multă atenție și răbdare în alegerea celor mai potriviți ochelari.',
  },
  {
    author: 'Adela Timofte',
    date: 'acum 3 ani',
    text: 'Lucrarea a ieșit foarte bine, în timpul promis. Am primit mai multe recomandări de care voi ține cont. Cu siguranță voi reveni.',
  },
  {
    author: 'Florin Cocuț',
    date: 'acum 4 ani',
    text: 'Sfaturile primite în alegerea ramelor și a lentilelor au fost de mare ajutor în luarea deciziei finale.',
  },
  {
    author: 'Ardelean Mircea',
    date: 'acum 5 ani',
    text: 'Am primit o consultație mult mai detaliată și mai profesionistă în comparație cu alte clinici renumite din Cluj.',
  },
  {
    author: 'Minu Marcel Becuș',
    date: 'acum 11 luni',
    text: 'Rame de foarte mare calitate, lentilele la fel, iar personalul este foarte amabil și bine pregătit.',
  },
] as const

export const PLACEHOLDERS = {
  email: 'de confirmat',
  whatsapp: 'de confirmat',
  prices: 'Lista actuală de tarife se completează după discuția cu echipa.',
  brands: 'Brandurile și colecțiile disponibile se completează după confirmare.',
} as const
