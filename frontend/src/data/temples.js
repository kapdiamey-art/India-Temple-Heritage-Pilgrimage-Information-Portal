const temples = [
  {
    id: 'kashi-vishwanath',
    name: 'Kashi Vishwanath Temple',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    deity: 'Lord Shiva',
    shortDescription: 'A sacred riverfront Shiva temple known for devotion, ghats, and spiritual energy.',
    image: '/images/temples/kashi-vishwanath.jpg',
    featured: true,
    history: 'Kashi Vishwanath is a major pilgrimage site associated with the city of Varanasi and long worship traditions connected with Shiva.',
    significance: 'Its riverfront setting and devotional continuity make it one of the most recognizable spiritual centers in India.',
    darshan: '6:00 AM - 9:00 PM',
    timings: 'Morning mangala darshan and evening aarti.',
    dailyRitual: 'Mangala aarti, bhang aarti, evening aarti and shringar rituals.',
    demoNote: 'Temporary demo information for now. This sample data has not been officially verified.',
    festivals: [
      { name: 'Mahashivaratri', description: 'A major Shiva festival with night-long worship, processions, and devotional gatherings.' },
      { name: 'Kashi Tamil Sangamam', description: 'A cultural gathering documenting temple traditions and heritage flows between regions.' }
    ],
    visitorInfo: {
      dressCode: 'Modest clothing is preferred; remove leather items at sacred entry zones when required.',
      guidelines: 'Carry IDs where required, maintain silence near sanctums, and follow local crowd direction.',
      bestTimeToVisit: 'October to March, especially during early morning or evening aarti.',
      facilities: 'Rest areas, local guides, food and tea stalls, and roadside transit access.'
    },
    locationNote: 'Located in the old city of Varanasi near the Ganga ghats and riverfront lanes.',
  },
  {
    id: 'brihadeeswarar',
    name: 'Brihadeeswarar Temple',
    city: 'Thanjavur',
    state: 'Tamil Nadu',
    deity: 'Lord Shiva',
    shortDescription: 'A grand Chola-era temple with a towering vimana and remarkable stone craft.',
    image: '/images/temples/brihadeeswarar.jpg',
    featured: true,
    history: 'This Chola temple is associated with Rajaraja Chola and forms a center of early stone temple building traditions.',
    significance: 'The temple is remembered for the scale of its vimana, the connectedness of ritual spaces, and Tamil temple art.',
    darshan: '5:30 AM - 9:00 PM',
    timings: 'Morning puja, midday darshan and evening temple processions.',
    dailyRitual: 'Nitya puja, abhishekam, and evening light ceremony.',
    demoNote: 'Temporary demo information for now. This sample data has not been officially verified.',
    festivals: [
      { name: 'Brahmotsavam', description: 'A major annual temple festival with decorated deities, musical processions and cultural events.' },
      { name: 'Panguni Uthiram', description: 'A spring festival linked with festive processions and devotional recitations.' }
    ],
    visitorInfo: {
      dressCode: 'Light traditional clothing is acceptable, and respectful attire is recommended in temple areas.',
      guidelines: 'Follow queue discipline near sanctums and avoid leaning on sculptural walls and steps.',
      bestTimeToVisit: 'Early morning or late afternoon during cooler months.',
      facilities: 'Temple rest areas, information desks, parking, and nearby food services.'
    },
    locationNote: 'Located in Thanjavur city, Tamil Nadu, close to the heritage core and Chola-era streets.',
  },
  {
    id: 'jagannath-puri',
    name: 'Jagannath Temple',
    city: 'Puri',
    state: 'Odisha',
    deity: 'Jagannath',
    shortDescription: 'A major pilgrimage temple with devotional rituals, festive gatherings, and coastal heritage.',
    image: '/images/temples/jagannath-puri.jpg',
    featured: true,
    history: 'Jagannath Temple is connected with Odisha’s Jagannath tradition and the regional festival culture around the sacred Rath Yatra.',
    significance: 'The temple stands as a core example of devotional architecture, regional pilgrimage, and annual festival movement.',
    darshan: '5:00 AM - 10:00 PM',
    timings: 'Morning darshan, midday rituals and devotional evening discharge.',
    dailyRitual: 'Mangal aarti, bhoga offerings, and evening sandhya aarti.',
    demoNote: 'Temporary demo information for now. This sample data has not been officially verified.',
    festivals: [
      { name: 'Rath Yatra', description: 'The iconic chariot procession moves the deities through the streets of Puri.' },
      { name: 'Snana Yatra', description: 'A ritual bathing festival before the annual festival sequence begins.' }
    ],
    visitorInfo: {
      dressCode: 'Modest clothing is recommended; avoid bright or casual dress near ritual zones.',
      guidelines: 'Observe entry restrictions, respect the flow of pilgrims, and follow local guidance around the temple zone.',
      bestTimeToVisit: 'Winter months and during major festival calendars.',
      facilities: 'Pilgrim shelters, local guide services, community food stalls and public transit connections.'
    },
    locationNote: 'Located in Puri, Odisha, near the coastal heritage zone and festival routes.',
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple',
    city: 'Konark',
    state: 'Odisha',
    deity: 'Surya',
    shortDescription: 'A monumental chariot-shaped temple built in honor of the Sun God.',
    image: '/images/temples/konark-sun-temple.jpg',
    featured: false,
    history: 'The Konark Sun Temple is a Kalinga-era monumental temple associated with the Sun cult and artistic carving traditions.',
    significance: 'Its sculpted chariot and carved surfaces communicate both worship and the region’s architectural imagination.',
    darshan: '6:00 AM - 7:00 PM',
    timings: 'Morning light visit and late-afternoon site walks around the chariot sculpture.',
    dailyRitual: 'Morning darshan, symbolic light offerings, and general heritage site access.',
    demoNote: 'Temporary demo information for now. This sample data has not been officially verified.',
    festivals: [
      { name: 'Chandrabhaga Mela', description: 'A regional gathering linked with the riverbank and nearby festival traditions.' },
      { name: 'Surya Puja', description: 'A seasonal observance marking the Sun’s movement and temple significance.' }
    ],
    visitorInfo: {
      dressCode: 'Comfortable modest clothing is suitable for walks around the monuments.',
      guidelines: 'Plan around high heat, carry water, and respect carved stone surroundings.',
      bestTimeToVisit: 'October to February and early morning hours.',
      facilities: 'Visitor information desk, rest points, parking, local guides and food stalls.'
    },
    locationNote: 'Located in Konark, Odisha, along the seaward approach to the Sun Temple complex.',
  },
  {
    id: 'somnath',
    name: 'Somnath Temple',
    city: 'Veraval',
    state: 'Gujarat',
    deity: 'Lord Shiva',
    shortDescription: 'A legendary coastal temple representing continuity of Indian sacred architecture.',
    image: '/images/temples/somnath.jpg',
    featured: false,
    history: 'Somnath is linked with the Jyotirlinga tradition and the coastal sacred geography of Gujarat.',
    significance: 'Its continuity through historical rebuilding and pilgrimage routes forms a key story of sacred resilience.',
    darshan: '6:00 AM - 10:00 PM',
    timings: 'Morning darshan, noon continuity, evening aarti.',
    dailyRitual: 'Morning abhishekam, noon offerings, and evening aarti processions.',
    demoNote: 'Temporary demo information for now. This sample data has not been officially verified.',
    festivals: [
      { name: 'Mahashivaratri', description: 'A large Shiva observance with night worship and devotional gatherings.' },
      { name: 'Somnath Festival', description: 'A tourism and cultural festival celebrating the coastal heritage route.' }
    ],
    visitorInfo: {
      dressCode: 'Modest clothing and respectful temple attire are recommended.',
      guidelines: 'Carry water, manage timing for coastal heat, and observe temple queue directions.',
      bestTimeToVisit: 'Winter and early morning hours for the most comfortable visit.',
      facilities: 'Rest facilities, food services, and public visitor support around the temple complex.'
    },
    locationNote: 'Located in Veraval, Gujarat, by the Arabian Sea near the historic Jyotirlinga route.',
  },
  {
    id: 'meenakshi-amman',
    name: 'Meenakshi Amman Temple',
    city: 'Madurai',
    state: 'Tamil Nadu',
    deity: 'Meenakshi',
    shortDescription: 'A vibrant Dravidian temple known for towering gopurams and colorful festival traditions.',
    image: '/images/temples/meenakshi-amman.jpg',
    featured: true,
    history: 'The Meenakshi Amman Temple is connected with Madurai’s temple city identity and the development of layered Dravidian forms.',
    significance: 'Its carves, gopurams, processional routes and festival culture give the city a living heritage rhythm.',
    darshan: '5:00 AM - 11:00 PM',
    timings: 'Morning worship, afternoon quiet hours and evening processions.',
    dailyRitual: 'Daily worship, alankara processions, and evening temple movements.',
    demoNote: 'Temporary demo information for now. This sample data has not been officially verified.',
    festivals: [
      { name: 'Meenakshi Thirukalyanam', description: 'A marriage festival representing divine union and celebration in temple rhythms.' },
      { name: 'Chithirai Festival', description: 'Madurai’s major festival, marked by processions and city-wide participation.' }
    ],
    visitorInfo: {
      dressCode: 'Clothing should be modest and comfortable for movement among busy sacred lanes.',
      guidelines: 'Expect large crowds, especially during evening processions and festival days.',
      bestTimeToVisit: 'January to March or early evening for symbolic lights and rituals.',
      facilities: 'Temple area services, food courts, visitor assistance, and nearby city transport.'
    },
    locationNote: 'Located at the center of Madurai’s heritage city and temple precinct routes.',
  },
  {
    id: 'tirumala-venkateswara',
    name: 'Tirumala Venkateswara Temple',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    deity: 'Venkateswara',
    shortDescription: 'A sacred hill pilgrimage destination with devotional routes and regional temple traditions.',
    image: '/images/temples/tirumala-venkateswara.jpg',
    featured: true,
    history: 'Tirumala Venkateswara Temple is a major devotional center in the Tirupati hill region associated with Vaishnava worship.',
    significance: 'Its hill route, devotional movement and annual temple calendar bring together regional and national pilgrimage traditions.',
    darshan: '6:00 AM - 9:00 PM',
    timings: 'Morning darshan windows, alankara, and evening worship cycles.',
    dailyRitual: 'Suprabhatam, archana, naivedya and evening aarti series.',
    demoNote: 'Temporary demo information for now. This sample data has not been officially verified.',
    festivals: [
      { name: 'Brahmotsavam', description: 'A major annual temple festival with decorated processions and community participation.' },
      { name: 'Vaikunta Ekadasi', description: 'A major Vaishnava observance that emphasizes pilgrimage and open pathways of worship.' }
    ],
    visitorInfo: {
      dressCode: 'Simple modest clothing is recommended while visiting hill temple precincts.',
      guidelines: 'Book darshan windows in advance where available and carry water for the hill journey.',
      bestTimeToVisit: 'October to March, especially outside the busiest festival peaks.',
      facilities: 'Darshan counters, food services, lodging, and organized regional pilgrim support.'
    },
    locationNote: 'Located on the Tirumala hills near Tirupati, Andhra Pradesh, with a strong hill pilgrimage route.',
  },
  {
    id: 'khajuraho-temple-complex',
    name: 'Khajuraho Temple Complex',
    city: 'Khajuraho',
    state: 'Madhya Pradesh',
    deity: 'Shiva and Vishnu',
    shortDescription: 'A UNESCO-listed temple complex known for artistry, sandstone temples, and sculptural heritage.',
    image: '/images/temples/khajuraho.jpg',
    featured: false,
    history: 'The Khajuraho temple complex is associated with north-central Indian artistry and the rich sculptural vocabulary of temple building.',
    significance: 'The temple walls and carved stone surfaces show visual traditions connected with sacred narrative and regional design.',
    darshan: '6:00 AM - 7:00 PM',
    timings: 'Morning visits, midday transitions, and everyday heritage site movement.',
    dailyRitual: 'Morning worship and guided light-access touring.',
    demoNote: 'Temporary demo information for now. This sample data has not been officially verified.',
    festivals: [
      { name: 'Khajuraho Dance Festival', description: 'A cultural festival that connects temple heritage with classical dance traditions.' },
      { name: 'Mahashivaratri', description: 'An annual Shiva observance highlighting extended devotional participation.' }
    ],
    visitorInfo: {
      dressCode: 'Modest clothing is best for temple precinct movement and heritage walks.',
      guidelines: 'Respect sculptural monuments, avoid touching carved surfaces, and plan walking routes around the complex.',
      bestTimeToVisit: 'October to February when the site is easier to explore.',
      facilities: 'Visitor interpretation, local guides, rest points, parking and nearby hospitality services.'
    },
    locationNote: 'Located in Khajuraho, Madhya Pradesh, within the central Indian heritage corridor.',
  }
]

export default temples
