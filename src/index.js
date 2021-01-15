const fs = require('fs')
const path = require('path')
const express = require('express')

const __src = __dirname
const __routes = path.join(__src, 'routes')
const __libs = path.join(__src, 'lib')

const pageMaker = require(path.join(__libs, 'pageMaker'))

const app = express()

app.use((req, res, next) => {
  res.removeHeader('X-Powered-By')
  next()
})

app.get('/favicon.ico', (req, res) => res.redirect(308, '/img/favicon.webp'))
app.use(express.static('public', {
  maxAge: 31536000
}))

app.get('/', (req, res, next) => {
  res.end(document.innerHTML)
})

app.use('/products', require(path.join(__routes, 'products')))
app.use('/catalogs', require(path.join(__routes, 'catalogs')))
app.use('/brands', require(path.join(__routes, 'brands')))

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
