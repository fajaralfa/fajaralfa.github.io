const iconArr: [string, string][] = [
    ['js', 'devicon:javascript'],
    ['ts', 'devicon:typescript'],
    ['cpp', 'devicon:cplusplus'],
    ['py', 'devicon:python'],
    ['vue', 'devicon:vuejs'],
]
const icon = new Map<string, string>(iconArr)

export default function devIcon(key: string | undefined): string {
    if (typeof key === 'undefined' || !key) return ''
    const result = icon.get(key) ?? ''
    return result
}
