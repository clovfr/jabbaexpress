const fs = require('fs')
const path = require('path')
const minify = require('minify')

const __components = path.join(__dirname, '..', 'components')

const components = {}

fs.readdirSync(__components).forEach(template => {
  minify(path.join(__components, template))
    .then(zrap => {
      components[template.split('.')[0]] = zrap
    })
})
module.exports = components
