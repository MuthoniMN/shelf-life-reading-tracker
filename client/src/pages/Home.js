import React from "react";
import Button from "../components/Button";

export default function Home() {
    return(
        <div className="home-hero">
            <h1>Your Digital Reading Partner</h1>
            <p>Keep track of the books you read weekly, monthly and yearly. Organize your reading list based on your favorite genres</p>
            <Button text={"Get Started"} type="cta" />
        </div>
    )
}