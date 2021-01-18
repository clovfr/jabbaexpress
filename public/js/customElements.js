document.querySelectorAll('template')
  .forEach(template => {
    if (template.id) {
      customElements.define(
        template.id,
        class extends HTMLElement {
          static get observedAttributes () {
            return ['c', 'l']
          }

          constructor () {
            super()
            const templateContent = document.getElementById(template.id).content
            this.attachShadow({ mode: 'open' })
              .appendChild(templateContent.cloneNode(true))
          }

          connectedCallback () {
          // Invoked each time the custom element is appended into a document-connected element.
          // This will happen each time the node is moved, and may happen before the element's
          // contents have been fully parsed.
            console.debug(`'${template.id}' added to page`)
            this.parseMicrodatas()
          }

          disconnectedCallback () {
          // Invoked each time the custom element is disconnected from the document's DOM.
            console.debug(`'${template.id}' removed from page.`)
          }

          adoptedCallback () {
          // Invoked each time the custom element is moved to a new document.
            console.debug(`'${template.id}' moved to new page.`)
          }

          attributeChangedCallback (name, oldValue, newValue) {
          // Invoked each time one of the custom element's attributes is added, removed, or changed.
          // Which attributes to notice change for is specified in a static get `observedAttributes` method.
            console.debug(`'${template.id}' attribute '${name}' changed from '${oldValue}' to '${newValue}'.`)
          }

          parseMicrodatas () {
            if (this.querySelector('script')) {
              const microdata = JSON.parse(this.querySelector('script').innerText)

              const link = this.shadowRoot.querySelector('a')
              if (link) link.href = microdata['@id']

              Object.keys(microdata).forEach(key => {
                if (!/^@/.test(key)) {
                  const val = microdata[key]
                  // console.log(key, val)
                  const el = this.shadowRoot.querySelector(`.${key}`)
                  if (el) {
                    switch (key) {
                      case 'offers':
                        el.innerText = val.price + ' €'
                        break
                      case 'image':
                        el.src = val
                        break
                      case 'brand':
                        if (typeof val === 'object') {
                          if (val['@id']) el.innerHTML = `<a href="${val['@id']}">${val.name}</a>`
                          else el.innerText = val.name
                        } else {
                          el.innerText = val
                        }
                        break
                      default:
                        el.innerText = val
                    }
                  }
                }
              })
            }
          }
        }
      )
    }
  })
