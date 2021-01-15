const fs = require('fs')
const path = require('path')
const domino = require('domino')
const slug = require('slug')
const sass = require('sass')

const __src = path.join(__dirname, '..')
const __components = path.join(__src, 'components')
const __templates = path.join(__src, 'templates')

const { webSite, catalogs } = require(path.join(__src, '..', 'fakeData.js'))

module.exports = (data, templates = []) => {
  const window = domino.createWindow(fs.readFileSync(path.join(__templates, 'index.html')))
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
      let cate = `<li><a href="${cat['@id'] || '/catalogs/' + slug(cat.name.replace(/-/g, ''))}">${cat.name}</a>`
      let catee = ''
      catalogs.forEach(cta => {
        if (cta.isPartOf && cta.isPartOf === cat['@id']) {
          catee += `<li><a href="${cta['@id'] || '/catalogs/' + slug(cta.name.replace(/-/g, ''))}">${cta.name}</a></li>`
        }
      })
      if (catee) cate += `<ol>${catee}</ol>`
      cate += '</li>'
      ol.insertAdjacentHTML('beforeend', cate)
    }
  })
  nav.appendChild(ol)
  document.body.appendChild(nav)

  templates.push('user-bar')
  templates.push('search-form')
  templates.push('cart-icon')

  templates.forEach(tpl => {
    document.body.insertAdjacentHTML('beforeend', fs.readFileSync(path.join(__components, `${tpl}.html`), 'utf8'))
  })

  /* const templ = document.querySelectorAll('template')
  for (let i = 0; i < templ.length; i++) {
    // console.log(templ[i].innerHTML)
    if (templ[i].querySelector('style')) {
      templ[i].querySelector('style').innerHTML= sass.renderSync({
        data: templ[i].innerHTML,
        outputStyle: 'compressed'
      }).css
    }
    // more statements
  } */

  const style = document.querySelector('style')
  const st = sass.renderSync({
    data: style.innerHTML,
    outputStyle: 'compressed'
  }).css
  style.innerHTML = st

  const ce = document.createElement('script')
  ce.innerHTML = fs.readFileSync(path.join(__src, '..', 'public', 'js', 'customElements.js'), 'utf8')
  document.body.appendChild(ce)

  return window
}
