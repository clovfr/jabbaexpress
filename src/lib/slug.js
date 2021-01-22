const slug = require('slug')

module.exports = (string, options) => {
  return slug(string.replace(/-/g, ''), options)
}
