let loadStudio1Promise

module.exports.loadStudio1 = function(opts) {
  opts = opts || {}
  if (!loadStudio1Promise) {
    loadStudio1Promise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = opts.url || 'https://js.studio1.io/studio1.js'
      script.onload = () => resolve(window['studio1'])
      script.onerror = () => {
        loadStudio1Promise = undefined
        reject(new Error('Could not load Studio1.js'))
      }
      document.head.appendChild(script)
    })
  }
  return loadStudio1Promise
}
