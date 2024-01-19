import {RickAndMortyCharacter} from "./rickAndMortyCharacter.ts"

export type RickAndMortyDataType = {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string,
    },
    results: RickAndMortyCharacter[],
}