const path = require('path')
const express = require('express')
const minify = require('minify')

const __src = path.join(__dirname, '..')

const pageMaker = require(path.join(__src, 'lib', 'pageMaker'))

const datas = require(path.join(__src, '..', 'fakeData.js'))

const { webSite, products } = datas

let css
minify(path.join(__src, '..', 'public', 'css', 'catalogs.css'))
  .then(st => {
    css = st
  })

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
  const url = new URL(`${type}/${req.params.slug}`, webSite.id)
  const item = itemsList.find(c => {
    // console.log(c.id, url.href)
    return c.id === url.href
  })

  if (!item) {
    const err = new Error('Not Found')
    err.statusCode = 404
    return next(err)
  }

  const document = pageMaker(item, ['product-preview']).document

  const style = document.querySelector('style')
  style.innerHTML = style.innerHTML + css

  const jld = document.createElement('script')
  jld.type = 'application/ld+json'
  jld.innerHTML = JSON.stringify(item)

  const cata = document.createElement('article')
  cata.innerHTML = `<header><h2 slot="name">${item.name}</h2><p class="description">${item.description || ''}</p></header>`

  products.forEach(prod => {
    if (req.ope(prod, item)) {
      cata.insertAdjacentHTML('beforeend', `<${prod['@type']}-preview>
        <h2><a href="${prod.id}" title="${prod.name}">${prod.name}</a></h2>
        <img loading="lazy" src="${prod.image}"/>
        <p class="description">${prod.description || ''}</p>
        <script type="application/ld+json">${JSON.stringify(prod)}</script>
      </${prod['@type']}-preview>`)
    }
  })
  cata.appendChild(jld)
  const main = document.querySelector('main')
  main.appendChild(cata)

  document.body.querySelector('template').insertAdjacentElement('beforebegin', main)
  res.end(document.innerHTML)
})

module.exports = router
