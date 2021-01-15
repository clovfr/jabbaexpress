// const fs = require('fs')
const path = require('path')
const express = require('express')
const slug = require('slug')

const __src = path.join(__dirname, '..')
// const __templates = path.join(__src, 'templates')
const __libs = path.join(__src, 'lib')

const pageMaker = require(path.join(__libs, 'pageMaker'))

const router = express.Router()

const { catalogs, products } = require(path.join(__src, '..', 'fakeData.js'))

router.get('/', (req, res, next) => {
  res.end('catalogs /')
})

router.get('/:slug', (req, res, next) => {
  const catalog = catalogs.find(c => req.params.slug === slug(c.name.replace(/-/g, '')))

  if (!catalog) {
    const err = new Error('Not Found')
    err.statusCode = 404
    next(err)
  }

  const document = pageMaker(catalog, ['product-preview']).document

  const jsonld = document.createElement('script')
  jsonld.type = 'application/ld+json'
  jsonld.innerHTML = JSON.stringify(catalog)

  const main = document.createElement('main')
  main.innerHTML = '<link rel="stylesheet" href="/css/catalogs.css" />'
  document.body.appendChild(main)

  const cata = document.createElement('article')
  cata.innerHTML = `<header><h2 slot="name">${catalog.name}</h2><p class="description">${catalog.description}</p></header>`

  products.forEach(prod => {
    if (prod.isPartOf && prod.isPartOf === catalog['@id']) {
      cata.insertAdjacentHTML('beforeend', `<product-preview>
        <a href="${prod['@id']}">
          <h2>${prod.name}</h2>
          <p class="description">${prod.description}</p>
        </a>
        <script type="application/ld+json">${JSON.stringify(prod)}</script>
      </product-preview>`)
    }
  })
  cata.appendChild(jsonld)
  main.appendChild(cata)

  document.body.querySelector('template').insertAdjacentElement('beforebegin', main)
  res.end(document.innerHTML)
})

module.exports = router