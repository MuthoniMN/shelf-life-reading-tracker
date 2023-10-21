import React from 'react'
import logo from '../../logo.svg'
import Button from '../Button'
import './Navigation.css'

export default function Navigation() {
    return (
        <nav>
            <img src={logo} alt='Shelf Life - A reading tracker' />
            <h2>Shelf Life</h2>
            <div>
                <Button text={"Log In"} />
                <Button text={"Sign Up"} />
            </div>
        </nav>
    )
}