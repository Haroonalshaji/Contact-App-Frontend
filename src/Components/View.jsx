import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function View() {

    const base_url = 'http://localhost:8000';

    const [contactid, setContactid] = useState([])
    const {id} = useParams()

    // API call for get one contact
    const getContact = async(id) => {
        const result = await axios.get(`${base_url}/get-one-contact/${id}`)
        console.log(result.data.message);
        setContactid(result.data.message)
    }

    console.log(contactid);
    useEffect(()=>{
        getContact(id)
    },[])

    return (
        <div>
            <div className="container text-center">
                <MDBCard className='m-3 shadow' style={{ maxWidth: '540px', left: '250px' }}>
                    <MDBRow className='g-0'>
                        <MDBCol md='4'>
                            <MDBCardImage className='m-1' src='https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png' alt='...' fluid />
                        </MDBCol>
                        <MDBCol md='8'>
                            <MDBCardBody>
                                <MDBCardTitle className='container'>Card title</MDBCardTitle>
                                <MDBListGroup style={{ minWidth: '20rem' }} light>
                                    <MDBListGroupItem active noBorders aria-current='true' className='px-3 bg-light text-dark'>
                                        Contact Id : {contactid.id}
                                    </MDBListGroupItem>
                                    <MDBListGroupItem noBorders className='px-3'>
                                        Name : {contactid.firstname}
                                    </MDBListGroupItem>
                                    <MDBListGroupItem noBorders className='px-3'>
                                        Phone :{contactid.phone}
                                    </MDBListGroupItem>
                                    <MDBListGroupItem noBorders className='px-3'>
                                        Email :{contactid.email}
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBBtn href='/'>Home</MDBBtn>
            </div>
        </div>
    )
}

export default View