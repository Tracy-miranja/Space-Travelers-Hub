import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <nav className="navbar navbar-expand ps-4 pe-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <div className="navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Rockets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/mission">Mission</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default NavBar;
