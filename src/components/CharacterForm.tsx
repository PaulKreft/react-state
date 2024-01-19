import React, {ChangeEvent, FormEvent, useState} from "react";
import {RickAndMortyCharacter} from "../rickAndMortyCharacter.ts";

type CharacterFormProps = {
    addNewCharacter: (character: RickAndMortyCharacter) => void,
}

export const CharacterForm: React.FC<CharacterFormProps> = ({addNewCharacter}) => {
    const defaultCharacter: {} = {
        type: "",
        gender: "",
        origin: {name: "", url: ""},
        location: {name: "", url: ""},
        episode: [],
        url: "",
        created: "",
        comments: [],
    }

    const [name, setName] = useState<string>("");
    const [species, setSpecies] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [status, setStatus] = useState<string>("");

    const onNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value)
    }
    const onSpeciesChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSpecies(event.target.value)
    }
    const onImageChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setImage(event.target.value)
    }
    const onStatusChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setStatus(event.target.value)
    }

    const saveCharacter = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()

        const character: RickAndMortyCharacter = {
            ...defaultCharacter,
            id: 1,
            name,
            species,
            image,
            status,
        }


        addNewCharacter(character);
    }

    return (
        <form onSubmit={saveCharacter}>
            <input value={name} onChange={onNameChange} placeholder="Name"/>
            <input value={species} onChange={onSpeciesChange} placeholder="Species"/>
            <input value={image} onChange={onImageChange} placeholder="Image"/>
            <input value={status} onChange={onStatusChange} placeholder="Status"/>
            <button type={"submit"}>Save</button>
        </form>
    )
}