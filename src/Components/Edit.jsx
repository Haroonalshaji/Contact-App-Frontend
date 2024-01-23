import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {

    const { id } = useParams()

    const [cid, setId] = useState("");
    const [cfirstname, setName] = useState("");
    const [cphone, setPhone] = useState("");
    const [cemail, setEmail] = useState("");

    const location = useNavigate()

    const base_url = 'http://localhost:8000';

    // API call for get one contact
    const getContact = async (id) => {
        const result = await axios.get(`${base_url}/get-one-contact/${id}`)
        console.log(result.data.message);
        setId(result.data.message.id)
        setName(result.data.message.firstname)
        setPhone(result.data.message.phone)
        setEmail(result.data.message.email)
    }

    useEffect(() => {
        getContact(id)
    }, [])


    const updateOneContact = async (e) => {
        e.preventDefault()
        const body = {
            id: cid,
            firstname: cfirstname,
            phone: cphone,
            email: cemail
        }
        const result = await axios.post(`${base_url}/update-one-contact/${id}`, body)
        console.log(result);
        alert(result.data.message)
        location('/')
    }
    return (
        <div>
            <div className="container ">
                <h4 className='p-3'>Edit Contact Details :</h4>
                <form className='w-50'>
                    <MDBInput onChange={(e) => setId(e.target.value)} value={cid} label='id' id='formControlLg' type='text' size='lg' />
                    <br />
                    <MDBInput onChange={(e) => setName(e.target.value)} value={cfirstname} label='firstname' id='formControlLg' type='text' size='lg' />
                    <br />
                    <MDBInput onChange={(e) => setPhone(e.target.value)} value={cphone} label='phone' id='formControlLg' type='text' size='lg' />
                    <br />
                    <MDBInput onChange={(e) => setEmail(e.target.value)} value={cemail} label='email' id='formControlLg' type='text' size='lg' />
                    <br />
                    <div>
                        <button onClick={(e) => updateOneContact(e)} className='btn btn-primary text-center m-2'>UPDATE <i className='fa-solid fa-user-plus'></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Edit