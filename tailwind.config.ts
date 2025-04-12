import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    content: [
        "./content/**/*.md",
    ],
    plugins: [
        typography
    ]
}
