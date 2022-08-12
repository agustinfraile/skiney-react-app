import react from 'react'

// CSS
import './NavBar.css';

export default function NavBar () {
    return (
        <>
            <nav className='nav'>
                <ul className='nav-list_container'>
                    <li>Home</li>
                    <li>Productos</li>
                    <li>About</li>
                </ul>
            </nav>
        </>
    )
}