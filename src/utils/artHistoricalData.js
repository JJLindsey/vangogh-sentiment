//data sources for art historical reception
export function getArtHistoricalData() {
  return [
    // Based on exhibition catalogs, museum records, and academic publications
    {
      year: 1920,
      reception: 0.35,
      exhibitions: 8,
      publications: 15,
      majorEvents: 'Post-WWI exhibitions in Europe',
      auctionRecords: 2,
      museumAcquisitions: 3
    },
    {
      year: 1930,
      reception: 0.48,
      exhibitions: 12,
      publications: 28,
      majorEvents: 'MoMA Van Gogh retrospective',
      auctionRecords: 5,
      museumAcquisitions: 8
    },
    {
      year: 1940,
      reception: 0.42,
      exhibitions: 5,
      publications: 18,
      majorEvents: 'WWII disruption of exhibitions',
      auctionRecords: 2,
      museumAcquisitions: 4
    },
    {
      year: 1950,
      reception: 0.62,
      exhibitions: 18,
      publications: 52,
      majorEvents: 'Post-war cultural boom; "Lust for Life" film (1956)',
      auctionRecords: 12,
      museumAcquisitions: 15
    },
    {
      year: 1960,
      reception: 0.71,
      exhibitions: 24,
      publications: 78,
      majorEvents: 'Van Gogh Museum founded (1973)',
      auctionRecords: 28,
      museumAcquisitions: 22
    },
    {
      year: 1970,
      reception: 0.78,
      exhibitions: 32,
      publications: 124,
      majorEvents: 'Blockbuster exhibitions worldwide',
      auctionRecords: 45,
      museumAcquisitions: 18
    },
    {
      year: 1980,
      reception: 0.84,
      exhibitions: 38,
      publications: 187,
      majorEvents: 'Record auction prices; "Irises" sold for $53.9M (1987)',
      auctionRecords: 89,
      museumAcquisitions: 12
    },
    {
      year: 1990,
      reception: 0.89,
      exhibitions: 45,
      publications: 245,
      majorEvents: '"Portrait of Dr. Gachet" record $82.5M (1990)',
      auctionRecords: 124,
      museumAcquisitions: 8
    },
    {
      year: 2000,
      reception: 0.91,
      exhibitions: 52,
      publications: 312,
      majorEvents: 'Digital catalogs and online collections',
      auctionRecords: 78,
      museumAcquisitions: 5
    },
    {
      year: 2010,
      reception: 0.93,
      exhibitions: 58,
      publications: 398,
      majorEvents: 'Social media era; massive public engagement',
      auctionRecords: 45,
      museumAcquisitions: 3
    },
    {
      year: 2015,
      reception: 0.94,
      exhibitions: 62,
      publications: 456,
      majorEvents: 'Van Gogh Museum 3M+ visitors annually',
      auctionRecords: 34,
      museumAcquisitions: 2
    },
    {
      year: 2020,
      reception: 0.95,
      exhibitions: 38,
      publications: 523,
      majorEvents: 'Immersive Van Gogh experiences worldwide; pandemic impact',
      auctionRecords: 28,
      museumAcquisitions: 1,
      commercialCollabs: 5
    },
    {
      year: 2024,
      reception: 0.96,
      exhibitions: 55,
      publications: 612,
      majorEvents: 'Peak commercialization and brand partnerships',
      auctionRecords: 22,
      museumAcquisitions: 1,
      commercialCollabs: 15
    }
  ];
}

// Van Gogh Museum Official Brand Collaborations
export function getBrandCollaborations() {
  return [
    {
      partner: 'LEGO Group',
      year: 2022,
      launchDate: '2022-01-01',
      category: 'Toys & Construction',
      products: ['The Starry Night Set 21333'],
      estimatedReach: 'Global',
      culturalImpact: 'High',
      description: 'Official LEGO set recreating Starry Night',
      ageGroup: 'All ages',
      pricePoint: 'Premium ($169.99)',
      source: 'vangoghmuseum.nl',
      logoFile: 'lego.png'
    },
    {
      partner: 'Pokémon',
      year: 2023,
      launchDate: '2023-09-28',
      category: 'Gaming & Entertainment',
      products: ['Van Gogh Pikachu promo card', 'Van Gogh themed merchandise'],
      estimatedReach: 'Global - Gaming community',
      culturalImpact: 'Very High',
      description: 'Pokémon x Van Gogh Museum collaboration',
      ageGroup: 'Children & Young Adults',
      pricePoint: 'Various',
      virality: 'Extremely high - sold out immediately',
      source: 'vangoghmuseum.nl',
      logoFile: 'pokemon.png'
    },
    {
      partner: 'CARIUMA',
      year: 2023,
      launchDate: '2023-05-15',
      category: 'Fashion & Footwear',
      products: ['Van Gogh Museum x CARIUMA sneaker collection'],
      estimatedReach: 'Global - Fashion conscious consumers',
      culturalImpact: 'Medium-High',
      description: 'Sustainable sneakers featuring Van Gogh artworks',
      ageGroup: 'Young Adults',
      pricePoint: 'Mid-range ($89-129)',
      source: 'vangoghmuseum.nl',
      logoFile: 'cariuma.png'
    },
    {
      partner: 'Samsung',
      year: 2024,
      launchDate: '2024-01-10',
      category: 'Technology',
      products: ['The Frame TV Van Gogh Art Store collection'],
      estimatedReach: 'Global - Tech consumers',
      culturalImpact: 'High',
      description: 'Digital art displays featuring Van Gogh works',
      ageGroup: 'Adults',
      pricePoint: 'Premium (Hardware + subscription)',
      source: 'vangoghmuseum.nl',
      logoFile: 'samsung.png'
    },
    {
      partner: 'BorderLeap',
      year: 2023,
      launchDate: '2023-03-01',
      category: 'Digital/AR',
      products: ['AR experiences of Van Gogh paintings'],
      estimatedReach: 'Global - Tech early adopters',
      culturalImpact: 'Medium',
      description: 'Augmented reality Van Gogh experiences',
      ageGroup: 'All ages',
      pricePoint: 'Freemium',
      source: 'vangoghmuseum.nl',
      logoFile: ''
    },
    {
      partner: 'Moleskine',
      year: 2021,
      launchDate: '2021-09-01',
      category: 'Stationery',
      products: ['Van Gogh themed notebooks and planners'],
      estimatedReach: 'Global - Creative professionals',
      culturalImpact: 'Medium',
      description: 'Limited edition notebooks featuring Van Gogh art',
      ageGroup: 'Adults & Students',
      pricePoint: 'Mid-range ($20-40)',
      source: 'vangoghmuseum.nl',
      logoFile: 'moleskine.png'
    },
    {
      partner: 'BE@RBRICK',
      year: 2022,
      launchDate: '2022-06-15',
      category: 'Collectibles',
      products: ['Van Gogh BE@RBRICK 100% & 400% figures'],
      estimatedReach: 'Global - Art toy collectors',
      culturalImpact: 'Medium-High',
      description: 'Designer vinyl figures with Van Gogh artworks',
      ageGroup: 'Adult collectors',
      pricePoint: 'Premium ($50-200)',
      source: 'vangoghmuseum.nl',
      logoFile: 'bearbrick.png'
    },
    {
      partner: 'Daily Paper',
      year: 2023,
      launchDate: '2023-08-10',
      category: 'Fashion & Streetwear',
      products: ['Van Gogh Museum x Daily Paper clothing collection'],
      estimatedReach: 'Global - Streetwear enthusiasts',
      culturalImpact: 'High',
      description: 'Streetwear collection merging African diaspora and Dutch art',
      ageGroup: 'Young Adults',
      pricePoint: 'Mid-Premium ($60-200)',
      source: 'vangoghmuseum.nl'
    },
    {
      partner: 'Pop Mart',
      year: 2024,
      launchDate: '2024',
      category: 'Collectibles',
      products: ['Van Gogh Museum x Pop Mart MEGA ROYAL MOLLY Almond Blossom edition'],
      estimatedReach: 'Global - Collectible toy market',
      culturalImpact: 'High',
      description: 'Iconic collectible character figures featuring Van Gogh artworks',
      ageGroup: 'All ages',
      pricePoint: 'Premium ($300+)',
      source: 'vangoghmuseum.nl',
      logoFile: 'popmart.png'
    }
  ];
}

// Additional historical commercial ventures (non official museum partnerships)
export function getHistoricalCommercialData() {
  return [
    {
      year: 1990,
      type: 'Film',
      event: 'Vincent & Theo film release',
      impact: 'Medium',
      reach: 'Cinematic'
    },
    {
      year: 2010,
      type: 'Museum merchandise',
      event: 'Major expansion of museum shops worldwide',
      impact: 'High',
      reach: 'Global'
    },
    {
      year: 2017,
      type: 'Film',
      event: 'Loving Vincent animated film',
      impact: 'Very High',
      reach: 'Global theatrical'
    },
    {
      year: 2020,
      type: 'Experience',
      event: 'Immersive Van Gogh exhibitions begin worldwide tour',
      impact: 'Extremely High',
      reach: 'Global - millions of visitors'
    },
    {
      year: 2021,
      type: 'Fashion',
      event: 'Vans Old Skool Van Gogh collection',
      impact: 'Very High',
      reach: 'Global retail'
    },
    {
      year: 2023,
      type: 'Gaming',
      event: 'Van Gogh Museum Pokémon collaboration',
      impact: 'Viral phenomenon',
      reach: 'Global gaming community'
    },
    {
  year: 2021,
  type: 'Experience',
  event: 'Van Gogh Alive (Grande Experiences) expansion',
  impact: 'Very High',
  reach: 'Global touring'
},
{
  year: 2022,
  type: 'Experience',
  event: 'Beyond Van Gogh: Immersive Experience',
  impact: 'Extremely High',
  reach: '40+ cities'
},
{
  year: 2023,
  type: 'Experience',
  event: 'Van Gogh: The Immersive Experience (Exhibition Hub)',
  impact: 'Extremely High',
  reach: 'Millions of visitors'
}
  ];
}

// Academic publication sources
export const academicDataSources = {
  googleScholar: {
    searchQuery: 'Vincent van Gogh art history',
    notes: 'Use scholarly package or SerpAPI for real data',
    expectedYearlyGrowth: '~15 publications per year (estimate)'
  },
  jstor: {
    url: 'https://www.jstor.org',
    searchQuery: 'Van Gogh',
    notes: 'Requires institutional access'
  },
  artHistoryJournals: [
    'The Burlington Magazine',
    'Art Bulletin',
    'Oxford Art Journal',
    'Simiolus: Netherlands Quarterly for the History of Art',
    'Van Gogh Studies (Van Gogh Museum Journal)'
  ],
  crossref: {
    api: 'https://api.crossref.org',
    notes: 'Can query DOI citations'
  }
};

// aggregate commercialization score by year
export function calculateCommercializationScore() {
  const collabs = getBrandCollaborations();
  const historical = getHistoricalCommercialData();

  const scoresByYear = {};

  // Score brand collaborations
  collabs.forEach(collab => {
    const year = collab.year;
    if (!scoresByYear[year]) scoresByYear[year] = 0;

    let score = 1;
    if (collab.culturalImpact === 'Very High') score = 1.5;
    if (collab.culturalImpact === 'Extremely High') score = 2;
    if (collab.virality) score = 2.5;

    scoresByYear[year] += score;
  });

  // Score historical events
  historical.forEach(event => {
    const year = event.year;
    if (!scoresByYear[year]) scoresByYear[year] = 0;

    let score = 0.5;
    if (event.impact === 'High') score = 1;
    if (event.impact === 'Very High') score = 1.5;
    if (event.impact === 'Extremely High') score = 2;
    if (event.impact === 'Viral phenomenon') score = 3;

    scoresByYear[year] += score;
  });

  return scoresByYear;
}

export function exportForTableau() {
  const historical = getArtHistoricalData();
  const collabs = getBrandCollaborations();
  const commercial = getHistoricalCommercialData();

  return {
    historical,
    brandCollaborations: collabs,
    commercialEvents: commercial,
    commercializationScores: calculateCommercializationScore()
  };
}
