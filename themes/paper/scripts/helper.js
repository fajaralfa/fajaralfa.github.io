hexo.extend.helper.register('excerpt_gen', function (content, targetWordCount = 50) {
    let result = ''
    let wordCount = 0
    for (let c of content) {
        if (c === ' ') wordCount++
        if (wordCount === targetWordCount) break
        result += c
    }

    if (wordCount === 15)
    result += '...'

    return result
})