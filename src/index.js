const path = require('path')
const express = require('express')

const __src = __dirname
const __routes = path.join(__src, 'routes')
const __libs = path.join(__src, 'lib')

const routes = {
  ItemPage: require(path.join(__routes, 'ItemPage')),
  CollectionPage: require(path.join(__routes, 'CollectionPage'))
}

const pageMaker = require(path.join(__libs, 'pageMaker'))

const app = express()

app.use((req, res, next) => {
  res.removeHeader('X-Powered-By')
  next()
})

app.get('/favicon.ico', (req, res) => res.redirect(308, '/img/favicon.webp'))
app.use(express.static('public', {
  maxAge: 31536000000
}))

app.get('/', (req, res, next) => {
  res.end(document.innerHTML)
})

app.use('/products', (req, res, next) => {
  req.targetType = 'products'
  routes.ItemPage(req, res, next)
})

app.use('/catalogs',
  (req, res, next) => {
    req.targetType = 'catalogs'
    req.ope = (a, b) => a.category && a.category === b.id
    return routes.CollectionPage(req, res, next)
  })
app.use('/brands',
  (req, res, next) => {
    req.targetType = 'brands'
    req.ope = (a, b) => a.brand && a.brand.id && a.brand.id === b.id
    return routes.CollectionPage(req, res, next)
  })

// Error Handler

app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  console.error(err)

  const window = pageMaker({ ...err, error: err.message })
  const document = window.document

  document.body.querySelector('template').insertAdjacentHTML('beforebegin', `<main>
    <h2>${err.message}</h2>
  </main>`)

  res.end(document.innerHTML)
})

module.exports = app
