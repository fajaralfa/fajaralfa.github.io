import fs from 'node:fs/promises'
import { defineCommand, runMain } from 'citty'

const main = defineCommand({
    meta: {
        name: 'Create Content',
        version: '0.0.1',
        description: 'Create a Markdown Content',
    },
    args: {
        title: {
            type: 'positional',
            description: 'Content Name',
            required: true,
        },
        category: {
            type: 'positional',
            description: 'Content Category (post or page)',
            default: 'post',
            required: false,
        },
        description: {
            type: 'positional',
            description: 'Content Description',
            default: '',
            required: false,
        }
    },
    async run({ args }) {
        const filename = args.title.trim().replace(' ', '_') + '.md'
        const date = new Date().toLocaleDateString('en-CA')
        let path = 'content/'
        if (args.category === 'post') path += 'posts' + '/'
        else if (args.type === 'page') null
        const filepath = path + filename
        const file = await fs.open(filepath, 'wx')
        const stream = file.createWriteStream()
        stream.write('---\n')
        stream.write(`title: ${args.title}\n`)
        stream.write(`description: ${args.description}\n`)
        stream.write(`date: ${date}\n`)
        stream.write('---\n')
        console.log('Content created:', filepath)
    },
})

runMain(main)