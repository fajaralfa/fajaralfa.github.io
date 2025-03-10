import fs from 'node:fs/promises'
import path from 'node:path'
import { defineCommand, runMain } from 'citty'
import Turndown from 'turndown'

const main = defineCommand({
    meta: {
        name: 'Turn It to Markdown',
        version: '0.0.1',
        description: 'Convert HTML to Markdown',
    },
    args: {
        file: {
            type: 'positional',
            description: 'File Path',
            required: true,
        },
    },
    async run({ args }) {
        const filename = path.basename(args.file).replace(' ', '_').replace('.html', '.md')
        const folder = 'content/'
        const filepath = folder + filename
        const turndownService = new Turndown()
        const htmlFile = await fs.open(args.file)
        const htmlContent = await htmlFile.readFile()
        const newMdFile = await fs.open(filepath, 'wx')
        newMdFile.write('---\n')
        newMdFile.write(`title: \n`)
        newMdFile.write(`description: \n`)
        newMdFile.write('---\n\n')
        newMdFile.write(turndownService.turndown(htmlContent.toString()))
        newMdFile.close()
        console.log('HTML converted to Markdown:', filepath)
    },
})

runMain(main)