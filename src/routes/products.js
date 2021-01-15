const path = require('path')
const express = require('express')

const __src = path.join(__dirname, '..')
const __libs = path.join(__src, 'lib')

const pageMaker = require(path.join(__libs, 'pageMaker'))

const router = express.Router()

const { products } = require(path.join(__src, '..', 'fakeData.js'))

router.get('/', (req, res, next) => {
  res.end('product /') // req.__window.document.innerHTML)
})

router.get('/:slug', (req, res, next) => {
  console.log(req.params.slug)
  const product = products.find(prod => prod['@id'] === '/products/' + req.params.slug)
  if (!product) {
    const err = new Error('Not Found')
    err.statusCode = 404
    next(err)
  } else {
    const window = pageMaker(product, ['product-full'])
    const document = window.document

    const main = document.createElement('main')
    main.innerHTML = `
      <product-full>
        <h2 class="name">${product.name}</h2>
        <p class="description">${product.description}</p>
        <script type="application/ld+json">${JSON.stringify(product)}</script>
      </product-full>`
    document.body.querySelector('template').insertAdjacentElement('beforebegin', main)
    res.end(document.innerHTML)
  }
})

module.exports = router
