import React, {useEffect, useState} from "react";

import {RickAndMortyCharacter} from "./RickAndMortyCharacter.tsx";
import {RickAndMortyCharacter as CharacterType} from "../rickAndMortyCharacter.ts"

type RickAndMortyGalleryProp = {
    characters: CharacterType[];
}

export const RickAndMortyGallery: React.FC<RickAndMortyGalleryProp> = ({
                                                                           characters
                                                                       }) => {


    // setcharacters not used but included due to task requirements
    const [searchInput, setSearchInput] = useState("")
    const [limit, setLimit] = useState(5)

    const [filteredCharacters, setFilteredCharacters] = useState(characters);

    const onSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchInput(event.target.value)
    }

    const increaseLimit = (): void => {
        setLimit(limit + 5)
    }

    useEffect((): void => {
        setFilteredCharacters(characters
            .filter(character => character.name.toLowerCase().trim().includes(searchInput.toLowerCase().trim()))
            .slice(0, limit))

    }, [searchInput, limit])

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem"}}>
            <input onChange={onSearch} placeholder="Search character..." value={searchInput} type="text"/>
            <div style={{
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2rem",
                margin: "3rem 0",
                padding: 0
            }}>
                {filteredCharacters.map(character => (
                    <RickAndMortyCharacter
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                    />
                ))}


                <div style={{
                    display: filteredCharacters.length ? "none" : "initial",
                    background: "red",
                    padding: "1rem 2rem",
                    borderRadius: "5rem",
                    color: "white",
                    fontSize: "xx-large",
                    marginTop: "5rem"
                }}> Error: Search did not yield a
                    match
                </div>
            </div>

            <button style={{display: characters.length > limit ? "initial" : "none"}}
                    onClick={increaseLimit}> {`Show more than ${limit} characters`}
            </button>
        </div>
    )
}