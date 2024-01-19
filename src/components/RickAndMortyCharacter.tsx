import React from "react";
import {Link} from "react-router-dom";

type RickAndMortyCharacterProps = {
    id: number,
    name: string,
    image: string,
}

export const RickAndMortyCharacter: React.FC<RickAndMortyCharacterProps> = ({
                                                                                id,
                                                                                name,
                                                                                image,
                                                                            }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h4>{name}</h4>
            <Link to={`/characters/${id}`}>
                <img src={image} alt={name} style={{borderRadius: "100%"}}/>
            </Link>
        </div>
    )
}