import { Link, useHistory } from 'react-router-dom';

function Header()
{
    const history = useHistory();

    const logout = () =>
    {
        localStorage.removeItem('login');
        history.push("/");
    }
    return(
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/about" className="nav-link link-dark px-2">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="/todos" className="nav-link link-dark px-2">Todos</a>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <button className="btn btn-primary btn-md">Login</button>
                        </li>
                        &nbsp;
                        <li className="nav-item">
                            <button className="btn btn-danger btn-md" onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <span className="fs-4">
                            React App
                        </span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </header>
        </>
    );
}

export default Header;