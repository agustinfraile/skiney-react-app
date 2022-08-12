import react from 'react'

// CSS
import './NavBar.css';

export default function NavBar () {
    return (
        <>
            <nav className='nav'>
                <ul className='nav-list_container'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </>
    )
}