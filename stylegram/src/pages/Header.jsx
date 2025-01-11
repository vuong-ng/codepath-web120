import { Outlet, Link } from 'react-router-dom';
// import MenuBar from '../components/MenuBar';
import './Header.css';

const Header = () => {
    return (
            <div className="header">
                <nav>
                    <Link
                        to="/"
                    >
                        {" "}
                        StyleGram{" "}
                    </Link>
                    <Link
                        to="/new">
                        {" "}
                        Create new post{" "}
                    </Link>
                </nav>
            {/* <MenuBar /> */}
            <Outlet />
            </div>

    )
}
export default Header;