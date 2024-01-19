import {RickAndMortyCharacter} from "../rickAndMortyCharacter.ts";
import React, {ChangeEvent, FormEvent, useState} from "react";

import {useParams} from "react-router-dom";

type CharacterDetailCardProp = {
    characters: RickAndMortyCharacter[];
    addComment: (id: number, comment: string) => void
}

export const CharacterDetailCard: React.FC<CharacterDetailCardProp> = ({
                                                                           characters,
                                                                           addComment
                                                                       }) => {

    const {id} = useParams();
    const character: RickAndMortyCharacter | undefined = characters.find(character => character.id.toString() === id);

    console.log(character)
    const [comment, setComment] = useState<string>("")

    const onCommentChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
        setComment(event.target.value)
        console.log("chagning")
    }

    const onCommentSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        addComment(character?.id || 0, comment)
        setComment("")
    }

    return (

        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {character ?
                (<>
                        <h4>{character.name}</h4>
                        <img src={character.image} alt={character.name} style={{borderRadius: "100%"}}/>
                        <ul style={{listStyleType: "none"}}>
                            <li>Species: {character.species}</li>
                            <li>Gender: {character.gender}</li>
                            <li>Status: {character.status}</li>
                        </ul>
                        <form onSubmit={onCommentSubmit}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>

                            <textarea rows={5} cols={60} value={comment} name="comment" onChange={onCommentChange}
                                      placeholder={`What do you think about ${character.name}?`}/>
                                <button type={"submit"}>Add comment</button>
                            </div>
                        </form>
                        <h3>Comments</h3>
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            width: "80vw",
                            gap: "2rem",
                            padding: "1rem",
                            marginBottom: "5rem",
                        }}>

                            {character.comments.map((comment, index) => (

                                <div
                                    key={comment + index}
                                    style={{
                                        border: "black solid 2px",
                                        borderRadius: "1rem",
                                        padding: "1rem"
                                    }}>{comment}</div>
                            ))}
                        </div>
                    </>
                ) : <div style={{
                    background: "red",
                    padding: "1rem 2rem",
                    borderRadius: "5rem",
                    color: "white",
                    fontSize: "xx-large",
                    marginTop: "5rem"
                }}> {`Character with id ${id} could not be found`}
                </div>
            }
        </div>
    )
}