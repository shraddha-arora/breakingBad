import './App.css';
import Header from './components/Header';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import CharacterCards from './components/CharacterCards';
import SearchBar from './components/SearchBar'
import Pagination from './components/Pagination';

function App() {

  
  const[current, setCurrent] = useState(1)
  const[gridsPage] = useState(10)
  const[characters, setCharacters] = useState([]);
  const[processing, setProcessing] = useState(true)
  const[query, setQuery] = useState('')


  useEffect(()=>{
    const getCharacters = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setCharacters(result.data)
      setProcessing(false)
      
    }
    getCharacters()
  }, [query])

  const lastGrid = current*gridsPage
  const firstGrid = lastGrid - gridsPage
  const currentGrid = characters.slice(firstGrid, lastGrid)
  const paginate = (pageNumber) => setCurrent(pageNumber)
  return (
    <div className='container'>
       <Header />
       <SearchBar getSuggestedQuery={(q) => setQuery(q)}/>
       <CharacterCards characters = {currentGrid} processing = {processing}/>
      <Pagination gridsPage={gridsPage} totalGrids = {characters.length} paginate={paginate}/>
    </div>
    
  )
}

export default App;
