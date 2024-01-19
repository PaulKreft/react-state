import {RickAndMortyGallery} from "../components/RickAndMortyGallery.tsx";
import {RickAndMortyCharacter} from "../rickAndMortyCharacter.ts";
import React from "react";

type CharactersLayoutProp = {
    characters: RickAndMortyCharacter[];
}

export const CharactersLayout: React.FC<CharactersLayoutProp> = ({
                                                                     characters
                                                                 }) => {

    return (
        <RickAndMortyGallery characters={characters}/>
    )
}