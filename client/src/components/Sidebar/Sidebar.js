import React from "react";
import "./Sidebar.css"

const Sidebar = ({links, header, current, setCurrent}) => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <h3>{header}</h3>
                </li>
                {links.map(a => (
                    <li> 
                            <p className={current === a ? "active" : "genres"}  onClick={a === "All Genres" ? () => setCurrent("") : () => setCurrent(a)}>{a}</p>
                    </li>
                ))}
                <li>
                    <h3>Recommendations</h3>
                </li>
                <li>
                    <p>Best Sellers</p>
                    <p>Writer of the Month</p>
                    <p>Trending</p>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;