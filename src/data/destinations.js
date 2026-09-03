export const regions = [
  'Asia',
  'Europe',
  'Africa',
  'North America',
  'South America',
  'Oceania',
]

export const destinations = [
  {
    slug: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    coords: { lat: 35.0116, lon: 135.7681 },
    tagline: 'Temples, gardens, and the old capital’s quiet.',
    description:
      'Kyoto was Japan’s capital for over a thousand years. Its temples, shrines, and machiya-lined streets hold that history close.',
    imageQuery: 'kyoto japan temple',
    famousPlaces: [
      {
        name: 'Fushimi Inari Taisha',
        description: 'Thousands of vermilion torii gates climbing the mountain.',
        imageQuery: 'fushimi inari torii gates',
      },
      {
        name: 'Arashiyama Bamboo Grove',
        description: 'A quiet path through towering bamboo on the city’s edge.',
        imageQuery: 'arashiyama bamboo grove',
      },
      {
        name: 'Kiyomizu-dera',
        description: 'A wooden temple stage jutting out over the hillside.',
        imageQuery: 'kiyomizu-dera temple kyoto',
      },
    ],
  },
  {
    slug: 'lisbon',
    name: 'Lisbon',
    country: 'Portugal',
    region: 'Europe',
    coords: { lat: 38.7223, lon: -9.1393 },
    tagline: 'Tiled hills rolling down to the Tagus.',
    description:
      'Lisbon is built on seven hills of pastel façades, yellow trams, and river light. It rewards walking without a plan.',
    imageQuery: 'lisbon portugal street',
    famousPlaces: [
      {
        name: 'Belém Tower',
        description: 'A fortified tower guarding the mouth of the Tagus.',
        imageQuery: 'belem tower lisbon',
      },
      {
        name: 'Alfama District',
        description: 'Narrow lanes, fado music, and the oldest part of the city.',
        imageQuery: 'alfama lisbon streets',
      },
    ],
  },
  {
    slug: 'marrakech',
    name: 'Marrakech',
    country: 'Morocco',
    region: 'Africa',
    coords: { lat: 31.6295, lon: -7.9811 },
    tagline: 'A walled red city at the edge of the Atlas.',
    description:
      'Marrakech mixes souks, palaces, and gardens behind ochre walls, with the Atlas Mountains rising just beyond.',
    imageQuery: 'marrakech morocco medina',
    famousPlaces: [
      {
        name: 'Jemaa el-Fnaa',
        description: 'The main square, alive with stalls and music after dark.',
        imageQuery: 'jemaa el-fnaa marrakech square',
      },
      {
        name: 'Jardin Majorelle',
        description: 'A cobalt-blue garden of cacti and quiet courtyards.',
        imageQuery: 'jardin majorelle garden',
      },
    ],
  },
  {
    slug: 'buenos-aires',
    name: 'Buenos Aires',
    country: 'Argentina',
    region: 'South America',
    coords: { lat: -34.6037, lon: -58.3816 },
    tagline: 'Tango, wide avenues, and European bones.',
    description:
      'Buenos Aires wears its European influences on grand avenues, then undercuts them with tango bars and steakhouses.',
    imageQuery: 'buenos aires argentina street',
    famousPlaces: [
      {
        name: 'La Boca',
        description: 'A brightly painted riverside neighborhood, birthplace of tango.',
        imageQuery: 'la boca buenos aires colorful houses',
      },
      {
        name: 'Recoleta Cemetery',
        description: 'A city of mausoleums, ornate and eerily grand.',
        imageQuery: 'recoleta cemetery buenos aires',
      },
    ],
  },
  {
    slug: 'queenstown',
    name: 'Queenstown',
    country: 'New Zealand',
    region: 'Oceania',
    coords: { lat: -45.0312, lon: 168.6626 },
    tagline: 'Mountains dropping straight into a lake.',
    description:
      'Queenstown sits on Lake Wakatipu, ringed by the Remarkables. It is small, dramatic, and built for the outdoors.',
    imageQuery: 'queenstown new zealand lake mountains',
    famousPlaces: [
      {
        name: 'Lake Wakatipu',
        description: 'A long glacial lake framed by jagged peaks.',
        imageQuery: 'lake wakatipu queenstown',
      },
      {
        name: 'Skyline Gondola',
        description: 'A cable car climbing straight up out of town.',
        imageQuery: 'queenstown gondola skyline',
      },
    ],
  },
  {
    slug: 'reykjavik',
    name: 'Reykjavík',
    country: 'Iceland',
    region: 'Europe',
    coords: { lat: 64.1466, lon: -21.9426 },
    tagline: 'The world’s northernmost capital, lava close by.',
    description:
      'Reykjavík is compact and colorful, a launch point for glaciers, geysers, and northern lights just outside town.',
    imageQuery: 'reykjavik iceland city',
    famousPlaces: [
      {
        name: 'Hallgrímskirkja',
        description: 'A concrete church shaped like basalt columns, towering over the city.',
        imageQuery: 'hallgrimskirkja church reykjavik',
      },
      {
        name: 'Blue Lagoon',
        description: 'Milky geothermal water set in a black lava field.',
        imageQuery: 'blue lagoon iceland',
      },
    ],
  },
  {
    slug: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    region: 'Asia',
    coords: { lat: 35.6762, lon: 139.6503 },
    tagline: 'Neon streets over centuries-old shrines.',
    description:
      'Tokyo runs on contrast: quiet shrine courtyards a few blocks from Shibuya’s crossing, ramen counters under train tracks, and a skyline that never quite settles.',
    imageQuery: 'tokyo japan skyline night',
    famousPlaces: [
      {
        name: 'Shibuya Crossing',
        description: 'The world’s busiest pedestrian crossing, in constant motion.',
        imageQuery: 'shibuya crossing tokyo',
      },
      {
        name: 'Senso-ji Temple',
        description: 'Tokyo’s oldest temple, at the end of a lantern-lit market street.',
        imageQuery: 'sensoji temple asakusa',
      },
      {
        name: 'Tokyo Skytree',
        description: 'A broadcast tower with the city laid out beneath it.',
        imageQuery: 'tokyo skytree view',
      },
    ],
  },
  {
    slug: 'paris',
    name: 'Paris',
    country: 'France',
    region: 'Europe',
    coords: { lat: 48.8566, lon: 2.3522 },
    tagline: 'Wide boulevards and the Seine running through.',
    description:
      'Paris is built for walking: bridges, riverside quays, café terraces, and a skyline punctuated by one very famous iron tower.',
    imageQuery: 'paris france eiffel tower',
    famousPlaces: [
      {
        name: 'Eiffel Tower',
        description: 'The city’s iron centerpiece, lit up after dark.',
        imageQuery: 'eiffel tower paris',
      },
      {
        name: 'Louvre Museum',
        description: 'A former palace holding the world’s most visited art collection.',
        imageQuery: 'louvre museum paris',
      },
      {
        name: 'Montmartre',
        description: 'A hilltop village of cobblestones, artists, and a white basilica.',
        imageQuery: 'montmartre paris sacre coeur',
      },
    ],
  },
  {
    slug: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    region: 'Africa',
    coords: { lat: -33.9249, lon: 18.4241 },
    tagline: 'A flat-topped mountain dropping into two oceans.',
    description:
      'Cape Town sits where the Atlantic and Indian Oceans meet, with Table Mountain rising straight out of the city and wine country just beyond it.',
    imageQuery: 'cape town table mountain',
    famousPlaces: [
      {
        name: 'Table Mountain',
        description: 'A flat-topped peak reached by cable car, city and ocean below.',
        imageQuery: 'table mountain cape town',
      },
      {
        name: 'Boulders Beach',
        description: 'A colony of African penguins on a sheltered beach.',
        imageQuery: 'boulders beach penguins',
      },
    ],
  },
  {
    slug: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    region: 'South America',
    coords: { lat: -22.9068, lon: -43.1729 },
    tagline: 'Mountains, beaches, and a city between them.',
    description:
      'Rio is squeezed between granite peaks and the Atlantic, with a statue watching over the whole thing from above the clouds.',
    imageQuery: 'rio de janeiro brazil beach',
    famousPlaces: [
      {
        name: 'Christ the Redeemer',
        description: 'A towering statue over the city, reached by cog train.',
        imageQuery: 'christ the redeemer rio',
      },
      {
        name: 'Copacabana Beach',
        description: 'A long curving beach that never really quiets down.',
        imageQuery: 'copacabana beach rio',
      },
    ],
  },
  {
    slug: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Asia',
    coords: { lat: -8.3405, lon: 115.092 },
    tagline: 'Rice terraces, temples, and warm water.',
    description:
      'Bali moves at a slower pace: terraced rice fields, sea temples, and beach towns strung along the coast.',
    imageQuery: 'bali indonesia rice terrace',
    famousPlaces: [
      {
        name: 'Tanah Lot',
        description: 'A sea temple perched on a rock, surrounded at high tide.',
        imageQuery: 'tanah lot temple bali',
      },
      {
        name: 'Tegallalang Rice Terraces',
        description: 'Steep, hand-carved rice paddies stepping down a hillside.',
        imageQuery: 'tegallalang rice terrace bali',
      },
    ],
  },
  {
    slug: 'new-york',
    name: 'New York',
    country: 'United States',
    region: 'North America',
    coords: { lat: 40.7128, lon: -74.006 },
    tagline: 'A grid of avenues that never fully sleeps.',
    description:
      'New York stacks neighborhoods on top of each other — a park the size of a small town, bridges strung across two rivers, and a skyline visible from all of it.',
    imageQuery: 'new york city skyline',
    famousPlaces: [
      {
        name: 'Central Park',
        description: 'An 843-acre park cut straight through Manhattan.',
        imageQuery: 'central park new york',
      },
      {
        name: 'Statue of Liberty',
        description: 'A harbor island statue, reached by ferry.',
        imageQuery: 'statue of liberty new york',
      },
      {
        name: 'Times Square',
        description: 'A crossroads of screens, lights, and crowds at any hour.',
        imageQuery: 'times square new york night',
      },
    ],
  },
  {
    slug: 'cairo',
    name: 'Cairo',
    country: 'Egypt',
    region: 'Africa',
    coords: { lat: 30.0444, lon: 31.2357 },
    tagline: 'Ancient wonders at the edge of the desert.',
    description:
      'Cairo sprawls along the Nile, minarets and traffic noise giving way, just outside the city, to pyramids thousands of years older than the streets themselves.',
    imageQuery: 'cairo egypt pyramids',
    famousPlaces: [
      {
        name: 'Great Pyramids of Giza',
        description: 'The last standing wonder of the ancient world, on the city’s edge.',
        imageQuery: 'great pyramids giza',
      },
      {
        name: 'Egyptian Museum',
        description: 'Thousands of years of Egyptian history under one roof.',
        imageQuery: 'egyptian museum cairo',
      },
    ],
  },
  {
    slug: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    region: 'Oceania',
    coords: { lat: -33.8688, lon: 151.2093 },
    tagline: 'A harbor city built around its opera house.',
    description:
      'Sydney wraps around one of the world’s great natural harbors, its skyline anchored by white sails of concrete and a bridge you can climb.',
    imageQuery: 'sydney australia opera house harbor',
    famousPlaces: [
      {
        name: 'Sydney Opera House',
        description: 'Its sail-shaped roofs are the city’s most recognizable silhouette.',
        imageQuery: 'sydney opera house',
      },
      {
        name: 'Bondi Beach',
        description: 'A famous stretch of sand a short ride from downtown.',
        imageQuery: 'bondi beach sydney',
      },
    ],
  },
  {
    slug: 'vancouver',
    name: 'Vancouver',
    country: 'Canada',
    region: 'North America',
    coords: { lat: 49.2827, lon: -123.1207 },
    tagline: 'Mountains and ocean at the edge of the city.',
    description:
      'Vancouver sits between the Coast Mountains and the Pacific, a compact downtown ringed by forest, seawall, and water on nearly every side.',
    imageQuery: 'vancouver canada skyline mountains',
    famousPlaces: [
      {
        name: 'Stanley Park',
        description: 'A rainforest peninsula park right against the downtown skyline.',
        imageQuery: 'stanley park vancouver',
      },
      {
        name: 'Capilano Suspension Bridge',
        description: 'A swaying footbridge strung high above a forested canyon.',
        imageQuery: 'capilano suspension bridge',
      },
    ],
  },
]
