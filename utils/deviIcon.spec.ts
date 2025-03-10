import { expect, test } from "vitest";

test('Get a devIcon', () => {
    const expected = 'devicon:cplusplus'
    const actual = devIcon('cpp')
    expect(actual).equal(expected)
})