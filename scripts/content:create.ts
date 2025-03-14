import fs from 'node:fs/promises'
import consola from 'consola'

async function generate(args: { title: string, category: string, description: string }) {
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
    consola.box(`Content created: "${filepath}"`)
}

async function main() {
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
                default: '',
            })
        generate({ category, title, description })
    } catch (err) {
        consola.warn('Canceled.')
    }
}

main()