const fs = require('fs')
const path = require('path')
const minify = require('minify')

const __templates = path.join(__dirname, '..', 'templates')

const templates = {}

fs.readdirSync(__templates).forEach(template => {
  minify(path.join(__templates, template))
    .then(zrap => {
      templates[template.split('.')[0]] = zrap
    })
})
module.exports = templates
