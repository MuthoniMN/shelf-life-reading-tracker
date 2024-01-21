import React from "react";
import Button from "../Button";
import "./HomeHero.css"

const HomeHero = () => {
    return (
        <section className="flex home-hero">
            <div>
                <h1>Your Digital Reading Partner</h1>
                <p>Keep track of the books you read weekly, monthly and yearly. Organize your reading list based on your favorite genres</p>
                <Button text={"Get Started"} type="cta" />
            </div>
            <img width={500} src="https://images.unsplash.com/photo-1612477954469-c6a60de89802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D" alt="Reading a book" />
        </section>
    )
}

export default HomeHero