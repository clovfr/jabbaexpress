const path = require('path')
const express = require('express')

const __src = path.join(__dirname, '..')

const pageMaker = require(path.join(__src, 'lib', 'pageMaker'))

const datas = require(path.join(__src, '..', 'fakeData.js'))
const { webSite } = datas

// Router

const router = express.Router()

router.get('/', (req, res, next) => {
  const document = pageMaker({
    '@id': new URL(req.targetType, webSite.id).href
  }, []).document

  res.end(document.innerHTML)
})

router.get('/:slug', (req, res, next) => {
  const type = req.targetType
  const itemsList = datas[type]
  const url = new URL(`${type}/${req.params.slug}`, webSite.id).href
  const item = itemsList.find(prod => prod.id === url)
  if (!item) {
    const err = new Error('Not Found')
    err.statusCode = 404
    return next(err)
  }
  const window = pageMaker(item, ['product-full'])
  const document = window.document

  const main = document.querySelector('main')
  main.innerHTML = `<${item['@type']}-full>
    <h2 class="name">${item.name}</h2>
    <img loading="lazy" src="${item.image}"/>
    <p class="description">${item.description}</p>
    <p class="brand">${item.brand.name || ''}</p>
    <script type="application/ld+json">${JSON.stringify(item)}</script>
  </${item['@type']}-full>`
  document.body.querySelector('template').insertAdjacentElement('beforebegin', main)
  res.end(document.innerHTML)
})

module.exports = router
