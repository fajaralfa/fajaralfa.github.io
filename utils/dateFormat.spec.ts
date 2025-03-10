import { describe, expect, test } from "vitest";

describe('Format date to in-ID', () => {
    test('Date string', () => {
        const expected = '28 Feb 2005'
        const actual = dateFormat('2005-02-28')
        expect(actual).equal(expected)
    })
   test('Date object', () => {
        const expected = '28 Feb 2005'
        const dateObj = new Date('2005-02-28')
        const actual = dateFormat(dateObj)
        expect(actual).equal(expected)
    })
    test('Empty date > Undated', () => {
        let expected = 'Undated'
        let actual = dateFormat('')
        expect(actual).equal(expected)
    })
    test('Invalid date string > Throw error', () => {
        expect(() => dateFormat('capruk')).toThrow(RangeError)
    })
})