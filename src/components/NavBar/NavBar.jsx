import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const logoNav = "../img/Dragon-head2.jpg"
    return (
            <header>
                <Link to={"/"}>
                    <img className='nav-logo' title='Home' src={logoNav} alt="Logo" />
                </Link>


                <nav>
                    <ul className='navItems'>
                        <li>
                            <NavLink to={"/categoria/2"}>
                            Accesorios
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink to={"/categoria/3"}>
                            Suplementos
                            </NavLink>
                        </li>

                        

                        <li>
                            Contacto
                        </li>
                    </ul>
                </nav>

                <div>
                    <CartWidget />
                </div>
            </header>
    )
}

export default NavBar