import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import axios from "axios";
import { Link } from 'react-router-dom';
import Add from './Add';


function Admin() {

    const base_url = 'http://localhost:8000';

    // state creation 
    const [allContact, setAllContact] = useState([])

    const fetchData = async () => {
        const result = await axios.get(`${base_url}/get-all-contacts`) //array of employee
        console.log(result.data.contacts);
        setAllContact(result.data.contacts)
    }

    const deleteCon = async (id) => {
        const result = await axios.delete(`${base_url}/delete-contact/${id}`)
        console.log(result);
        fetchData()
    }

    console.log(allContact);

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className='d-flex m-3 justify-content-evenly container-fluid'>
                <h5>Add new Contact</h5>
                <Link to={'/add'}>
                    <MDBBtn>Add</MDBBtn>
                </Link>

            </div>

            <div className='container'>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    {
                        allContact.map((item) => (
                            <MDBCol sm={12} md={6} lg={4} xl={3}>
                                <MDBCard className='my-4 mx-3' style={{ height: ' 310px', width: '300px' }}>
                                    <MDBCardImage
                                        src='https://cdn-icons-png.flaticon.com/512/8748/8748602.png'
                                        alt='...'
                                        position='top'
                                        style={{width:"180px" , paddingLeft:'50px', margin:'10px'}}
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>Name :{item.firstname} {item.lastname}</MDBCardTitle>
                                        <table class="table" className='container m-1'>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Mobile:</th>
                                                    <td>{item.phone}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Email :</th>
                                                    <td>{item.email}</td>
                                                </tr>
                                                <tr className='d-flex justify-content-around'>
                                                    <Link to={`view/${item.id}`}>
                                                        <td><i className='fa-solid fa-eye'></i></td>
                                                    </Link>
                                                    <Link to={`edit/${item.id}`}>
                                                        <td><i className='fa-solid fa-pen mx-5'></i></td>
                                                    </Link>
                                                    <td><i onClick={() => deleteCon(item.id)} className='fa-solid fa-trash text-danger'></i></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))
                    }

                </MDBRow>
            </div>
        </div>
    )
}

export default Admin