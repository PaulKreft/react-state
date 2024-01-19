import {Routes, Route} from "react-router-dom";
import {CharactersLayout} from "./pages/CharactersLayout.tsx";
import {HomeLayout} from "./pages/HomeLayout.tsx";
import {Header} from "./components/Header.tsx";
import {CharacterDetailCard} from "./components/CharacterDetailCard.tsx";
import {RickAndMortyCharacter} from "./rickAndMortyCharacter.ts";
import {rickAndMortyData} from "./rickAndMortyData.ts";
import {CharacterForm} from "./components/CharacterForm.tsx";
import {useState} from "react";


function App() {
    const [characters, setCharacters]
        = useState<RickAndMortyCharacter[]>(rickAndMortyData.results.map(data => ({
        ...data,
        comments: []
    })))

    const addNewCharacter = (character: RickAndMortyCharacter): void => {
        characters.push(character)
        setCharacters(characters)
    }

    const addComment = (id: number, comment: string): void => {
        const character: RickAndMortyCharacter | undefined = characters.find(character => character.id === id)

        character?.comments.push(comment)
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<HomeLayout/>}/>
                <Route path={"/characters"} element={<CharactersLayout characters={characters}/>}/>
                <Route path={"/characters/:id"}
                       element={<CharacterDetailCard characters={characters} addComment={addComment}/>}/>
                <Route path={"/characters/add"} element={<CharacterForm addNewCharacter={addNewCharacter}/>}/>
            </Routes>
        </>
    )
}

export default App
