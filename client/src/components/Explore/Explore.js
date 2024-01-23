import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./Explore.css"

const nav = [
    "All Genres",
    "Business",
    "Science",
    "Fiction",
    "Self Help",
    "Productivity"
]

const Explore = () => {
    const [current, setCurrent] = useState("")
    return (
        <section className='flex explore'>
            <Sidebar links={nav} header={"Filter by Genres"} current={current} setCurrent={setCurrent} />
            <div>
                <h2>Explore Books</h2>
            </div>
        </section>
    )
}

export default Explore;