import React from 'react'
import loading from '../img/loading.gif'

const Loading = () => {
    return (
        <div>
            <img src = {loading} style={{width: '200px', margin: 'auto', display: 'block', alt:'Loading'}}/>
        </div>
    )
}

export default Loading
