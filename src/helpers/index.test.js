import {getLetterMatchCount} from './index'

describe('getLetterMatchCount',()=>{
    const secretWord = 'party';
    test('return correct count when there are no matching letters',()=>{
        const lettermatchCount = getLetterMatchCount('bones',secretWord)
        expect(lettermatchCount).toBe(0)
    })
    test('return correct count when there are 3 matching letters',()=>{
        const lettermatchCount = getLetterMatchCount('train',secretWord)
        expect(lettermatchCount).toBe(3) 
    })
    test('return correct count when there are duplicate matching letters',()=>{
        const lettermatchCount = getLetterMatchCount('parka',secretWord)
        expect(lettermatchCount).toBe(3) 
    })
})