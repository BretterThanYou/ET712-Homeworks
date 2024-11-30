import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Immortality in Animals</Link></li>
        <li><Link to="/curiosity">Tardigrades</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;