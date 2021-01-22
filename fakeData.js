const path = require('path')
const slug = require(path.join(__dirname, 'src', 'lib', 'slug'))

const webSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  // id: new URL('http://localhost:8080').href,
  id: new URL('https://jabbaexpress.clov.fr').href,
  name: 'JabbaExpress',
  description: 'Le plus grand choix de contrebande de la Galaxie'
}
const brands = [
  {
    '@type': 'Brand',
    id: '/brands/corporation-dingenieurie-corellienne',
    name: "Corporation d'Ingénieurie Corellienne"
  },
  {

    '@type': 'Brand',
    name: 'Chantiers de Kuat'
  },
  {

    '@type': 'Brand',
    id: '/brands/ingenierie-lourde-de-rothana',
    name: 'Ingénierie Lourde de Rothana'
  },
  {

    '@type': 'Brand',
    name: 'Département Impérial de la Recherche Militaire'
  },
  {

    '@type': 'Brand',
    id: '/brands/sienar-fleet-systems',
    name: 'Sienar Fleet Systems'
  },
  {

    '@type': 'Brand',
    name: 'Corporation Minière Corellienne'
  },
  {

    '@type': 'Brand',
    name: "Division des Véhicules Customisés d'Ubrikkian"
  },
  {

    '@type': 'Brand',
    id: '/brands/koensayr',
    name: 'Koensayr'
  },
  {

    '@type': 'Brand',
    id: '/brands/incom-corporation',
    name: 'Incom Corporation'
  },
  {

    '@type': 'Brand',
    name: 'Slayn & Korpil'
  },
  {

    '@type': 'Brand',
    name: 'Kuat Drive Yards'
  },
  {

    '@type': 'Brand',
    name: 'Kuat Systems Engineering'
  },
  {

    '@type': 'Brand',
    id: '/brands/urbahhahvoovv-joiners-and-artisans',
    name: 'Urbahhahvoovv Joiners & Artisans'
  },
  {

    '@type': 'Brand',
    name: 'Appazanna Engineering Works'
  },
  {

    '@type': 'Brand',
    name: 'Z-Gomot Ternbuell Guppat Corp.'
  },
  {

    '@type': 'Brand',
    name: 'Zug system'
  },
  {

    '@type': 'Brand',
    name: 'Feethan Ottraw Scalable Assemblies'
  },
  {

    '@type': 'Brand',
    name: 'Buuper Torsckil Abbey Devices'
  },
  {

    '@type': 'Brand',
    name: 'Hoersch-Kessel Drive Inc.'
  },
  {

    '@type': 'Brand',
    name: 'Revolutionary Industries'
  },
  {

    '@type': 'Brand',
    name: 'Free Dac Volunters Engineering Corps'
  },
  {

    '@type': 'Brand',
    name: 'Pammant Docks'
  },
  {

    '@type': 'Brand',
    name: 'Baktoid Fleet Ordonance'
  },
  {

    '@type': 'Brand',
    name: 'TransGalMeg Industries Inc.'
  }
]

const catalogs = [
  {

    '@type': 'CollectionPage',
    id: '/catalogs/pieces-detachees',
    name: 'Pièces détachées',
    description: 'Grand choix de pièces détachées'
  },
  {

    '@type': 'CollectionPage',
    id: '/catalogs/spaceships',
    name: 'Spaceships',
    description: 'Grand choix de pièces détachées pour vaisseaux spaciaux',
    isPartOf: '/catalogs/pieces-detachees',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            id: 'https://jabbaexpress.clov.fr',
            name: 'JabbaExpress',
            '@type': 'WebSite'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            id:
            'https://jabbaexpress.clov.fr/catalogs',
            '@type': 'CollectionPage',
            name: 'Catalogues'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            id:
            'https://jabbaexpress.clov.fr/catalogs/spaceships',
            '@type': 'CollectionPage',
            name: 'Spaceships'
          }
        }
      ]
    }
  },
  {

    '@type': 'CollectionPage',
    id: 'https://jabbaexpress.clov.fr/catalogs/speeders',
    name: 'Speeders',
    description: 'Grand choix de pièces détachées pour speeders',
    isPartOf: '/catalogs/pieces-detachees',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            id: 'https://jabbaexpress.clov.fr',
            name: 'JabbaExpress',
            '@type': 'WebSite'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            id:
            'https://jabbaexpress.clov.fr/catalogs',
            '@type': 'CollectionPage',
            name: 'Catalogues'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            id:
            'https://jabbaexpress.clov.fr/catalogs/speeders',
            '@type': 'CollectionPage'
          }
        }
      ]
    }
  },
  {

    '@type': 'CollectionPage',
    id: 'https://jabbaexpress.clov.fr/catalogs/space-stations',
    name: 'Space Stations',
    description: 'Grand choix de pièces détachées pour station spaciales',
    isPartOf: '/catalogs/pieces-detachees'
  },
  {
    name: 'Fighters',
    isPartOf: '/catalogs/spaceships'
  }, {
    name: 'Frightners',
    isPartOf: '/catalogs/spaceships'
  },
  {
    name: 'Warships',
    isPartOf: '/catalogs/spaceships'
  },
  /* {

    '@type': 'CollectionPage',
    id: '/catalogs/land-vehicules',
    name: 'Land Vehicules',
    description: 'Grand choix de pièces détachées pour véhicules terrestres'
    isPartOf: '/catalogs/pieces-detachees',
  }, */
  {

    '@type': 'CollectionPage',
    id: '/catalogs/tanks',
    name: 'Tanks',
    description: 'Grand choix de pièces détachées pour véhicules terrestres blindés',
    isPartOf: '/catalogs/pieces-detachees'
  },
  {

    '@type': 'CollectionPage',
    id: '/catalogs/t65-xwing',
    name: 'T-65 X-wing',
    description: 'Grand choix de pièces détachées pour T-65 X-wing',
    isPartOf: '/catalogs/fighters',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            id: 'https://jabbaexpress.clov.fr',
            name: 'JabbaExpress',
            '@type': 'WebSite'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            id:
            'https://jabbaexpress.clov.fr/catalogs',
            '@type': 'CollectionPage',
            name: 'Catalogues'
          }
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            id: 'https://jabbaexpress.clov.fr/catalogs/spaceships',
            '@type': 'CollectionPage',
            name: 'Spaceships'
          }
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            id: 'https://jabbaexpress.clov.fr/catalogs/t65-xwing',
            '@type': 'CollectionPage'
          }
        }
      ]
    }
  },
  {

    '@type': 'CollectionPage',
    id: '/catalogs/tie-advanced-x1',
    name: 'TIE Advanced X1',
    description: 'Grand choix de pièces détachées pour T-65 X-wing',
    isPartOf: '/catalogs/fighters'
  },
  {

    '@type': 'CollectionPage',
    id: '/catalogs/rttt',
    name: 'RT-TT',
    description: 'Grand choix de pièces détachées pour RT-TT',
    isPartOf: '/catalogs/tanks'
  },
  {
    name: 'Croiseur de la République',
    isPartOf: '/catalogs/warships'
  }, {
    name: 'Podracer',
    isPartOf: '/catalogs/speeders'
  }, {
    name: 'Sith Infiltrator',
    isPartOf: '/catalogs/fighters'
  }, {
    name: 'Chasseur Droïde',
    isPartOf: '/catalogs/fighters'
  }, {
    name: 'Vaisseau Amiral Droïde',
    isPartOf: '/catalogs/warships'
  }, {
    name: 'Chasseur N-1 Naboo',
    isPartOf: '/catalogs/fighters'
  }, {
    name: 'CAB',
    isPartOf: '/catalogs/spaceships'
  }, {
    name: 'Speeder Naboo',
    isPartOf: '/catalogs/speeders'
  }, {
    name: 'Croiseur Naboo',
    isPartOf: '/catalogs/warships'
  }, {
    name: 'Airspeeder de Zam',
    isPartOf: '/catalogs/speeders'
  }, {
    name: 'Chasseur Jedi',
    isPartOf: '/catalogs/fighters'
  }, {
    name: 'Star Destroyer',
    isPartOf: '/catalogs/warships'
  }, {
    name: 'Millenium Falcon',
    isPartOf: '/catalogs/frightners'
  }, {
    name: 'Chasseur TIE',
    isPartOf: '/catalogs/fighters'
  }, {
    name: 'Death Star',
    isPartOf: '/catalogs/space-stations'
  }, {
    name: 'Sandcrawler',
    isPartOf: '/catalogs/tanks'
  }, {
    name: 'Y-wing BTL-A4',
    isPartOf: '/catalogs/fighters'
  }, {
    name: 'TB-TT',
    isPartOf: '/catalogs/tanks'
  }, {
    name: 'Snowspeeder',
    isPartOf: '/catalogs/speeders'
  }, {
    name: 'TS-TT',
    isPartOf: '/catalogs/tanks'
  }, {
    name: 'Bombardier TIE',
    isPartOf: '/catalogs/fighters'
  }, {
    name: 'Slave 1',
    isPartOf: '/catalogs/fighters'
  }, {
    name: 'Navette Impériale',
    isPartOf: '/catalogs/spaceships'
  }, {
    name: 'Barge de Jabba',
    isPartOf: '/catalogs/speeders'
  }, {
    name: 'A-wing RZ-1',
    isPartOf: '/catalogs/fighters'
  }, {
    name: 'B-wing',
    isPartOf: '/catalogs/fighters'
  }

]

const products = [
  {
    '@type': 'Product',
    id: '/products/generateur-de-champ-de-deflection',
    name: 'Générateur de champ de déflection',
    description: 'CTDV',
    image: '/img/generateur-de-champ-de-deflection.webp',
    category: '/catalogs/t65-xwing',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '1829.36',
      priceValidUntil: '2021-01-31',
      itemCondition: 'UsedCondition',
      availability: 'InStock',
      url: '/products/generateur-de-champ-de-deflection'
    },
    brand: {
      '@type': 'Brand',
      id: '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {

    '@type': 'Product',
    id: '/products/unite-de-brouillage',
    name: 'Unité de brouillage',
    description: 'CTDV',
    image: '/img/unite-de-brouillage.webp',
    category: '/catalogs/t65-xwing',
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
      id: '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {

    '@type': 'Product',
    id: '/products/convertisseur-de-rephasage-des-soussystemes',
    name: "Convertisseur de rephasage d'énergie des sous-systèmes",
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/convertisseur-de-rephasage-des-soussystemes.webp',
    category: '/catalogs/t65-xwing',
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
      id: '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {

    '@type': 'Product',
    id: '/products/ordinateur-de-visee',
    name: 'Ordinateur de visée',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/ordinateur-de-visee.webp',
    category: '/catalogs/t65-xwing',
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
      id: '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {

    '@type': 'Product',
    id: '/products/turborotor',
    name: 'Turborotor',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/turborotor.webp',
    category: '/catalogs/t65-xwing',
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
      id: '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {

    '@type': 'Product',
    id: '/products/projecteur-de-champ-de-deflexion',
    name: 'Projecteur de champ de déflexion',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/projecteur-de-champ-de-deflexion.webp',
    category: '/catalogs/t65-xwing',
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
      id: '/brands/incom-corporation',
      name: 'Incom Corporation'
    }
  },
  {

    '@type': 'Product',
    id: '/products/generateur-de-distribution-a-impulsions',
    name: 'Générateur de distribution à impulsions',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/.webp',
    category: '/catalogs/tie-advanced-x1',
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
      id: '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {

    '@type': 'Product',
    id: '/products/moteur-ionique',
    name: 'Moteur ionique',
    description: 'CTDV',
    // // category: 'Blaster Parts',
    image: '/img/.webp',
    category: '/catalogs/tie-advanced-x1',
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
      id: '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {

    '@type': 'Product',
    id: '/products/canon-laser-basse-temperature',
    name: 'Canon laser basse température',
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/.webp',
    category: '/catalogs/tie-advanced-x1',
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
      id: '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {

    '@type': 'Product',
    id: '/products/radiateur-dhyperpropulsion',
    name: "Radiateur d'hyperpropulsion",
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/.webp',
    category: '/catalogs/tie-advanced-x1',
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
      id: '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {

    '@type': 'Product',
    id: '/products/module-de-telemetrie-stereoscopique',
    name: 'Module de Télémétrie stéréoscopique',
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/module-de-telemetrie-stereoscopique.webp',
    category: '/catalogs/tie-advanced-x1',
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
      id: '/brands/sienar-fleet-systems',
      name: 'Sienar Fleet Systems'
    }
    /* review: '',
      sku: '', */
  },
  {

    '@type': 'Product',
    id: '/products/disque-servoassiste',
    name: 'Disque servo-assisté',
    description: 'CTDV',
    // category: 'Blaster Parts',
    image: '/img/disque-servoassiste.webp',
    category: '/catalogs/rttt',
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
      id: '/brands/ingenierie-lourde-de-rothana',
      name: 'Ingénierie Lourde de Rothana'
    }
    /* review: '',
      sku: '', */
  }
]

const domain = webSite.id

const collectionComplete = (type, resource) => {
  return resource.forEach(item => {
    item['@context'] = 'https://schema.org'
    const url = new URL(`${type}/${slug(item.name)}`, domain).href
    item.id = url

    if (item.brand) {
      item.brand.id = new URL(`brands/${slug(item.brand.name)}`, domain).href
    }

    if (item.image) item.image = new URL(item.image, domain).href
    if (item.isPartOf) item.isPartOf = new URL(item.isPartOf, domain).href
    if (item.category) item.category = new URL(item.category, domain).href

    if (item.offers) {
      item.offers.url = url
      item.offers.price = Math.round(Math.random() * 1000000) / 100 + 330
    }
  })
}

collectionComplete('products', products)
collectionComplete('catalogs', catalogs)
collectionComplete('brands', brands)

module.exports = { webSite, catalogs, products, brands }
