import {Link} from 'react-router-dom'
import '../css/navbar.css'
function Navbar(){
    return (
        <div className='navbar'>
            <div className="navbar-brand">
                <Link to="/">Movie App</Link>
            </div>

            <div className="navbar-links">
                <Link to="/" className='nav-link'>Home</Link>
                <Link to="/favorite" className='nav-link'>Favorite</Link>
            </div>
      
      

        </div>

    )

} 
export default Navbar ;