import {useEffect, useState} from 'react'
import {rickAndMortyData} from "./rickAndMortyData"

function App() {

    // setData not used but included due to task requirements
    const [data, setData] = useState(rickAndMortyData)
    const [searchInput, setSearchInput] = useState("")
    const [limit, setLimit] = useState(5)

    const [filteredCharacters, setFilteredCharacters] = useState(data.results);

    const onSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchInput(event.target.value)
    }

    const increaseLimit: void = () => {
        setLimit(limit + 5)
    }

    useEffect((): void => {
        setFilteredCharacters(data.results
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
                    <div key={character.id}>
                        <h4>{character.name}</h4>
                        <img src={character.image} alt={character.name} style={{borderRadius: "100%"}}/>
                        <ul>
                            <li>Species: {character.species}</li>
                            <li>Gender: {character.gender}</li>
                            <li>Status: {character.status}</li>
                        </ul>
                    </div>
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

            <button style={{display: data.results.length > limit ? "initial" : "none"}}
                    onClick={increaseLimit}> {`Show more than ${limit} characters`}
            </button>
        </div>
    )
}

export default App
