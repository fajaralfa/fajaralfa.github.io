import fs from 'node:fs/promises'
import consola from 'consola'

type ContentArgs = { title: string, category: string, description: string }

async function generate(args: ContentArgs) {
    const filename = args.title.trim().replace(' ', '_') + '.md'
    const date = new Date().toLocaleDateString('en-CA')
    let path = 'content/'
    if (args.category === 'post') path += 'posts' + '/'
    const filepath = path + filename
    const file = await fs.open(filepath, 'wx')
    const stream = file.createWriteStream()
    stream.write('---\n')
    stream.write(`title: ${args.title}\n`)
    stream.write(`description: ${args.description}\n`)
    stream.write(`date: ${date}\n`)
    stream.write('---\n')
    return filepath
}

async function main() {
    consola.start('Create a Content')
    try {
        const category = await consola.prompt(
            'Category',
            {
                type: 'text',
                default: 'post',
                placeholder: 'post (default)',
                cancel: 'reject',
            })
        const title = await consola.prompt(
            'Title',
            {
                type: 'text',
                placeholder: 'She, The One that Shining My Class',
                cancel: 'reject',
            })
        const description = await consola.prompt(
            'Description',
            {
                type: 'text',
                cancel: 'reject',
            })
        const result = await generate({ category, title, description })
        consola.success(`Content created: "${result}"`)
    } catch (err) {
        consola.warn('Canceled.')
    }
}

main()