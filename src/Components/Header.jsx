import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary " data-bs-theme="dark">
                <div class="container-fluid ">
                    <a class="navbar-brand" href="/"><i className='fa-solid fa-phone mx-3'></i>Contact Search</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarColor01">
                        <form class="d-flex">
                            <input class="form-control me-sm-2" type="search" placeholder="Search"></input>
                                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header