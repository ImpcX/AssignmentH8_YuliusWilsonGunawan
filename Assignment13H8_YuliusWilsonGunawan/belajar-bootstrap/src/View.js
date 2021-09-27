import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Content()
{
    return(
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Paragraf Pertama</h1>
                    <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac tincidunt nisl. Quisque tempor semper urna, eu volutpat purus suscipit at. Duis tincidunt, urna nec volutpat dictum, massa nisl dictum arcu, egestas dignissim neque lorem ac nulla. Etiam cursus mattis bibendum. Suspendisse orci purus, laoreet sed interdum sed, posuere eleifend arcu. Mauris eget dui vehicula odio consectetur placerat in eget justo. Sed metus justo, sollicitudin et diam vitae, cursus aliquet ante.</p>
                    <button className="btn btn-primary btn-lg" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Modal Box
                    </button>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            Modal Box
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function Header()
{
    return(
        <>
        <nav className="py-2 bg-light border-bottom">
            <div className="container d-flex flex-wrap">
                <ul className="nav me-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link link-dark px-2 active" aria-current="page">Home</a>
                    </li>
                    <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Features</a></li>
                    <li className="nav-item"><a href="/" className="nav-link link-dark px-2">FAQs</a></li>
                    <li className="nav-item"><a href="/" className="nav-link link-dark px-2">About</a></li>
                </ul>
                <ul className="nav">
                    <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Login</a></li>
                    <li className="nav-item"><a href="/" className="nav-link link-dark px-2">Sign Up</a></li>
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

function Footer()
{
    return(
        <center>
        <footer className="text-muted py-5 border-top">
            <div className="container">
                <p className="mb-1">This is React App in Bootstrap</p>
            </div>
        </footer>
        </center>
    );
}

function View()
{
    return(
        <>
        <Header />
        <div className="container">
            <Content />     
        </div>
        <Footer />
        </>
    );
}

export default View;