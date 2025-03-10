import { describe, expect, it } from "vitest"
import {mount} from '@vue/test-utils'
import ProsePre from "./ProsePre.vue"

describe('ProsePre (for Code block)', () => {
    it('show the code', () => {
        const c = mount(ProsePre, {
            slots: {
                default: 'Hello World'
            }
        })
        expect(c.text()).toContain('Hello World')
    })
    it('show valid language icon', () => {
        const c = mount(ProsePre, {
            props: {
                language: 'js'
            }
        })
        expect(c.get('.icon-language').classes()).contain('i-devicon:javascript')
    })
    it('copy to clipboard', async () => {
        const c = mount(ProsePre, {
            slots: {
                default: 'Hello World from Copy'
            }
        })
        c.get('.copy-to-clipboard').trigger('click')
        expect(await navigator.clipboard.readText()).toContain('Hello World from Copy')
        expect(c.get('.icon-copy').classes()).contain('i-ri:file-copy-fill')
        setTimeout(() => Promise.resolve(expect(c.get('.icon-copy').classes()).contain('i-ri:file-copy-line')), 2000)
    })
})