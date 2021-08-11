import React from 'react'
import Character from './Character'
import Loading from './Loading'

const CharacterCards = ({ characters, processing }) => {
    return processing ? 
    (<Loading/>) 
    : 
    (
    <section className='cards'>
            {characters.map((character) => (
                <Character key={character.char_id} character={character}/>
            ))}
        </section>
        )
}

export default CharacterCards
