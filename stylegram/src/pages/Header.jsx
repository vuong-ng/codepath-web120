import { Outlet, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
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

            </div>
            <Outlet />
        </div>
    )
}
export default Header;