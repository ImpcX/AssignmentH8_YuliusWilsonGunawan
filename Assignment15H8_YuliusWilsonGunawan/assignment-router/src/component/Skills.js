function Skills()
{
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
                            <a href="/experience" className="nav-link link-dark px-2">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="/skills" className="nav-link link-dark px-2">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="/interest" className="nav-link link-dark px-2">Interest</a>
                        </li>
                        <li className="nav-item">
                            <a href="/awards" className="nav-link link-dark px-2">Awards</a>
                        </li>
                    </ul>
                    <form className="col-3 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </nav>
            <div className="container">
                <div class="card">
                    <center>
                        <div class="card-body">
                            <h5 class="card-title">Selamat Datang di Skills</h5>
                            <p class="card-text">Page ini berisikan Informasi mengenai Skills</p>
                        </div>
                    </center>
                </div>
            </div>
        </>
    );
}

export default Skills;