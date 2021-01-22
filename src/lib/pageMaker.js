const path = require('path')
const domino = require('domino')
const minify = require('minify')

const __src = path.join(__dirname, '..')
const templates = require(path.join(__src, 'lib', 'templates'))
const components = require(path.join(__src, 'lib', 'components'))

const { webSite, catalogs, brands } = require(path.join(__src, '..', 'fakeData.js'))

let script

minify(path.join(__src, '..', 'public', 'js', 'customElements.js'))
  .then(html => {
    script = html
  })

module.exports = (data, customElements = []) => {
  const window = domino.createWindow(templates.index)
  const document = window.document

  // HEAD

  const title = document.createElement('title')
  if (data.name) title.innerHTML = `${data.name} - ${webSite.name}`
  else title.innerHTML = `${webSite.name} - ${webSite.description}`
  document.head.appendChild(title)

  const description = document.createElement('meta')
  description.name = 'description'
  description.content = data.description || webSite.description
  document.head.appendChild(description)

  if (!data.error) {
    const canonical = document.createElement('link')
    canonical.rel = 'canonical'
    canonical.href = data.url || data.id || webSite.url
    document.head.appendChild(canonical)
  }

  if (data.error || data['@type'] === 'SearchResultsPage') {
    const robot = document.createElement('meta')
    robot.name = 'robots'
    robot.content = 'noindex, noarchive'
    document.head.appendChild(robot)
  }

  const jsonld = document.createElement('script')
  jsonld.type = 'application/ld+json'
  jsonld.innerHTML = JSON.stringify(webSite)
  document.head.appendChild(jsonld)

  // BODY

  const nav = document.createElement('nav')
  nav.id = 'menu'
  const ol = document.createElement('ol')
  catalogs.forEach(cat => {
    if (!cat.isPartOf) {
      let cate = `<li><a href="${cat.id}">${cat.name}</a>`
      let catee = ''
      catalogs.forEach(cta => {
        if (cta.isPartOf && cta.isPartOf === cat.id) {
          catee += `<li><a href="${cta.id}">${cta.name}</a>`
          let cateee = ''
          catalogs.forEach(ctx => {
            if (ctx.isPartOf && ctx.isPartOf === cta.id) {
              cateee += `<li><a href="${ctx.id}">${ctx.name}</a>`
            }
          })
          if (cateee) catee += `<ol>${cateee}</ol>`
          catee += '</li>'
        }
      })
      if (catee) cate += `<ol>${catee}</ol>`
      cate += '</li>'
      ol.insertAdjacentHTML('beforeend', cate)
    }
  })
  let brs = '<li><a href="/brands/">Brands</a><ol>'
  brands.forEach(brand => {
    brs += `<li><a href="${brand.id}">${brand.name}</a>`
  })
  ol.insertAdjacentHTML('beforeend', brs + '</ol></li>')
  nav.appendChild(ol)
  document.body.appendChild(nav)

  customElements.push('user-bar')
  customElements.push('search-form')
  customElements.push('cart-icon')

  customElements.forEach(el => {
    document.body.insertAdjacentHTML('beforeend', components[el])
  })

  const ce = document.createElement('script')
  ce.innerHTML = script
  document.body.appendChild(ce)

  return window
}
