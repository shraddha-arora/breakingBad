import React from 'react'

const Pagination = ({gridsPage, totalGrids, paginate}) => {
    const totalPages = []
    for(let i=1; i<= Math.ceil(totalGrids/gridsPage);i++){
        totalPages.push(i)
    }
    return (
        <nav>
            <ul className = 'pagination' id='pageID'>{
            totalPages.map(
                number => (
                    <li key={number} className='page'>
                        <a href = '!#' className='page-link' onClick={()=>{paginate(number)}}>
                            {number}
                        </a>
                    </li>
                )
            )
                }
            </ul>
        </nav>
    )
}

export default Pagination
