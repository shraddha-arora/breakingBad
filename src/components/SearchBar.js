import React, {useState} from 'react'

const SearchBar = ({getSuggestedQuery}) => {
    
    const[keyword, setKeyword] = useState('')

    const onChange = (q) => {
        setKeyword(q)
        getSuggestedQuery(q)
    }

    return (
        <section className = 'search'>
            <form>
                <input 
                value = {keyword}
                type='text' 
                onChange = {(e) => onChange(e.target.value)}
                className='form-control' 
                placeholder = 'Search'
                autoFocus
                />
            </form>
        </section>
    )
}

export default SearchBar
