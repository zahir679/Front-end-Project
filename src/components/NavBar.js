import React from 'react'
import './Components.css'

function NavBar() {
    return (
        <div className="navBar">
            {/* <img class="logo" src="https://cdn.discordapp.com/attachments/913726718169194496/914897116453826620/unknown.png"/> */}
            <a href="/">Home</a>
            <a href="/LogIn">Log In</a>
            <a href="https://www.google.com/">WishList</a>
            <a href="#Footer">Contact Us</a>
        </div>
    )
}

export default NavBar;
