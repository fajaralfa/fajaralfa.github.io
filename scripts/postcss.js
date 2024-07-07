const postcss = require('postcss')
const postcssrc = require('postcss-load-config')

/**
 * 
 * @param {import('hexo/dist/extend/renderer').StoreFunctionData} data 
 * @returns 
 */
function renderer(data) {
    return postcssrc()
        .then(({ plugins, options }) => postcss(plugins).process(data.text, options))
        .then(result => result.css)
}

hexo.extend.renderer.register('css', 'css', renderer)