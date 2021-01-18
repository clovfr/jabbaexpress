const webSite = {
  '@context': 'https://schema.org/',
  '@type': 'WebSite',
  '@id': 'https://jabbaexpress.clov.fr',
  url: 'https://jabbaexpress.clov.fr',
  name: 'JabbaExpress',
  description: 'Le plus grand choix de contrebande de la Galaxie'
}
const brands = [
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    '@id': '/brands/corporation-dingenieurie-corellienne',
    name: "Corporation d'Ingénieurie Corellienne"
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Chantiers de Kuat'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    '@id': '/brands/ingenierie-lourde-de-rothana',
    name: 'Ingénierie Lourde de Rothana'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Département Impérial de la Recherche Militaire'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    '@id': '/brands/sienar-fleet-systems',
    name: 'Sienar Fleet Systems'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Corporation Minière Corellienne'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: "Division des Véhicules Customisés d'Ubrikkian"
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    '@id': '/brands/koensayr',
    name: 'Koensayr'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    '@id': '/brands/incom-corporation',
    name: 'Incom Corporation'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Slayn & Korpil'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Kuat Drive Yards'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Kuat Systems Engineering'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    '@id': '/brands/urbahhahvoovv-joiners-and-artisans',
    name: 'Urbahhahvoovv Joiners & Artisans'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Appazanna Engineering Works'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Z-Gomot Ternbuell Guppat Corp.'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Zug system'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Feethan Ottraw Scalable Assemblies'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Buuper Torsckil Abbey Devices'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Hoersch-Kessel Drive Inc.'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Revolutionary Industries'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Free Dac Volunters Engineering Corps'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Pammant Docks'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'Baktoid Fleet Ordonance'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Brand',
    name: 'TransGalMeg Industries Inc.'
  }
]
const models = [
  {
    type: 'Croiseur de la République'
  }, {
    type: 'Barge de débarquement'
  }, {
    type: 'TMT'
  }, {
    type: 'Sous Marin Gungan'
  }, {
    type: 'Nef Royale de la Reine Naboo'
  }, {
    type: 'Podracer'
  }, {
    type: 'Sith Infiltrator'
  }, {
    type: 'Chasseur Droïde'
  }, {
    type: 'Vaisseau Amiral Droïde'
  }, {
    type: 'Chasseur N-1 Naboo'
  }, {
    type: 'CAB'
  }, {
    type: 'Speeder Naboo'
  }, {
    type: 'Croiseur Naboo'
  }, {
    type: 'Airspeeder de Zam'
  }, {
    type: 'Chasseur Jedi'
  }, {
    type: '----------------------'
  }, {
    type: 'Blockade Runner'
  }, {
    type: 'Star Destroyer'
  }, {
    type: 'Millenium Falcon'
  }, {
    type: 'Chasseur TIE'
  }, {
    type: 'Death Star'
  }, {
    type: 'Sandcrawler'
  }, {
    type: 'T-65 X-wing',
    id: 1
  }, {
    type: 'Y-wing BTL-A4'
  }, {
    type: 'TIE Advanced X1'
  }, {
    type: 'TB-TT'
  }, {
    type: 'Snowspeeder'
  }, {
    type: 'TS-TT'
  }, {
    type: 'Bombardier TIE'
  }, {
    type: 'Slave 1'
  }, {
    type: 'Navette Impériale'
  }, {
    type: 'Barge de Jabba'
  }, {
    type: 'A-wing RZ-1'
  }, {
    type: 'B-wing'
  }
]

const catalogs = [
  {
    '@context': 'https://schema.org/',
    '@type': 'Collection',
    '@id': '/catalogs/spaceships',
    name: 'Spaceships',
    description: 'Grand choix de pièces détachées pour vaisseaux spaciaux',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'https://jabbaexpress.clov.fr',
            name: 'JabbaExpress',
            '@type': 'WebSite'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id':
            'https://jabbaexpress.clov.fr/catalogs',
            '@type': 'Collection',
            name: 'Catalogues'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@id':
            'https://jabbaexpress.clov.fr/catalogs/spaceships',
            '@type': 'Collection',
            name: 'Spaceships'
          }
        }
      ]
    }
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Collection',
    '@id': 'https://jabbaexpress.clov.fr/catalogs/speeders',
    name: 'Speeders',
    description: 'Grand choix de pièces détachées pour speeders',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'https://jabbaexpress.clov.fr',
            name: 'JabbaExpress',
            '@type': 'WebSite'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id':
            'https://jabbaexpress.clov.fr/catalogs',
            '@type': 'Collection',
            name: 'Catalogues'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@id':
            'https://jabbaexpress.clov.fr/catalogs/speeders',
            '@type': 'Collection'
          }
        }
      ]
    }
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Collection',
    '@id': 'https://jabbaexpress.clov.fr/catalogs/space-stations',
    name: 'Space Stations',
    description: 'Grand choix de pièces détachées pour station spaciales'
  },
  /* {
    '@context': 'https://schema.org/',
    '@type': 'Collection',
    '@id': '/catalogs/land-vehicules',
    name: 'Land Vehicules',
    description: 'Grand choix de pièces détachées pour véhicules terrestres'
  }, */
  {
    '@context': 'https://schema.org/',
    '@type': 'Collection',
    '@id': '/catalogs/tanks',
    name: 'Tanks',
    description: 'Grand choix de pièces détachées pour véhicules terrestres blindés'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Collection',
    '@id': '/catalogs/t65-xwing',
    name: 'T-65 X-wing',
    description: 'Grand choix de pièces détachées pour T-65 X-wing',
    isPartOf: '/catalogs/spaceships',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': 'https://jabbaexpress.clov.fr',
            name: 'JabbaExpress',
            '@type': 'WebSite'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id':
            'https://jabbaexpress.clov.fr/catalogs',
            '@type': 'Collection',
            name: 'Catalogues'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@id': 'https://jabbaexpress.clov.fr/catalogs/spaceships',
            '@type': 'Collection',
            name: 'Spaceships'
          }
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@id': 'https://jabbaexpress.clov.fr/catalogs/t65-xwing',
            '@type': 'Collection'
          }
        }
      ]
    }
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Collection',
    '@id': '/catalogs/tie-advanced-x1',
    name: 'TIE Advanced X1',
    description: 'Grand choix de pièces détachées pour T-65 X-wing',
    isPartOf: '/catalogs/spaceships'
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Collection',
    '@id': '/catalogs/rttt',
    name: 'RT-TT',
    description: 'Grand choix de pièces détachées pour RT-TT',
    isPartOf: '/catalogs/tanks'
  }

]

const products = [

  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/generateur-de-champ-de-deflection',
    name: 'Générateur de champ de déflection',
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/generateur-de-champ-de-deflection.webp',
    isPartOf: '/catalogs/t65-xwing',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock',
      url: '/products/generateur-de-champ-de-deflection'
    },
    brand: {
      '@type': 'Brand',
      '@id': '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/unite-de-brouillage',
    name: 'Unité de brouillage',
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/unite-de-brouillage.webp',
    isPartOf: '/catalogs/t65-xwing',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock'
    },
    brand: {
      '@type': 'Brand',
      '@id': '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/convertisseur-de-rephasage-des-soussystemes',
    name: "Convertisseur de rephasage d'énergie des sous-systèmes",
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/convertisseur-de-rephasage-des-soussystemes.webp',
    isPartOf: '/catalogs/t65-xwing',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock'
    },
    brand: {
      '@type': 'Brand',
      '@id': '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/ordinateur-de-visee',
    name: 'Ordinateur de visée',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/ordinateur-de-visee.webp',
    isPartOf: '/catalogs/t65-xwing',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock'
    },
    brand: {
      '@type': 'Brand',
      '@id': '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/turborotor',
    name: 'Turborotor',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/turborotor.webp',
    isPartOf: '/catalogs/t65-xwing',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock'
    },
    brand: {
      '@type': 'Brand',
      '@id': '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/projecteur-de-champ-de-deflexion',
    name: 'Projecteur de champ de déflexion',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/projecteur-de-champ-de-deflexion.webp',
    isPartOf: '/catalogs/t65-xwing',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock'
    },
    brand: {
      '@type': 'Brand',
      '@id': '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/generateur-de-distribution-a-impulsions',
    name: 'Générateur de distribution à impulsions',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/.webp',
    isPartOf: '/catalogs/tie-advanced-x1',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock'
    },
    url: '/products/',
    /* aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 0,
        reviewCount: 0
      }, */
    brand: {
      '@type': 'Brand',
      '@id': '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/moteur-ionique',
    name: 'Moteur ionique',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/.webp',
    isPartOf: '/catalogs/tie-advanced-x1',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock'
    },
    url: '/products/moteur-ionique',
    /* aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 0,
        reviewCount: 0
      }, */
    brand: {
      '@type': 'Brand',
      '@id': '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/canon-laser-basse-temperature',
    name: 'Canon laser basse température',
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/.webp',
    isPartOf: '/catalogs/tie-advanced-x1',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock'
    },
    url: '/products/',
    /* aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 0,
        reviewCount: 0
      }, */
    brand: {
      '@type': 'Brand',
      '@id': '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/radiateur-dhyperpropulsion',
    name: "Radiateur d'hyperpropulsion",
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/.webp',
    isPartOf: '/catalogs/tie-advanced-x1',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      url: '/products/',
      availability: 'InStock'
    },
    /* aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 0,
        reviewCount: 0
      }, */
    brand: {
      '@type': 'Brand',
      '@id': '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/module-de-telemetrie-stereoscopique',
    name: 'Module de Télémétrie stéréoscopique',
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/module-de-telemetrie-stereoscopique.webp',
    isPartOf: '/catalogs/tie-advanced-x1',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock',
      url: '/products/module-de-telemetrie-stereoscopique'
    },
    /* aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 0,
        reviewCount: 0
      }, */
    brand: {
      '@type': 'Brand',
      '@id': '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    '@id': '/products/disque-servoassiste',
    name: 'Disque servo-assisté',
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/disque-servoassiste.webp',
    isPartOf: '/catalogs/rttt',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '123.99',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock',
      url: '/products/module-de-telemetrie-stereoscopique'
    },
    /* aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: 0,
        reviewCount: 0
      }, */
    brand: {
      '@type': 'Brand',
      '@id': '/brands/ingenierie-lourde-de-rothana',
      name: 'Ingénierie Lourde de Rothana'
    }
    /* review: '',
      sku: '', */
  }
]

module.exports = { webSite, catalogs, products, brands }
