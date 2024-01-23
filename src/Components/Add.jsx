import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {

    const location = useNavigate()

    const [id, setId] = useState("");
    const [firstname, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const base_url = 'http://localhost:8000/add-contact'

    const addContact = async (e) => {
        e.preventDefault()
        // for adding it into the mongodb
        console.log(id, firstname, phone, email);
        const body = { id, firstname, phone, email }
        const result = await axios.post(base_url, body).then((result)=>{
            console.log(result);
            alert(result.data.message);
            location('/')
        }).catch((error)=>{
            alert('This contact is already exisitng !')
        })
        
    }

    return (
        <div>
            <div className="container ">
                <h4 className='p-3'>Add Contact Details :</h4>
                <form className='w-50'>
                    <MDBInput onChange={(e) => setId(e.target.value)} label='id' id='formControlLg' type='text' size='lg' />
                    <br />
                    <MDBInput onChange={(e) => setName(e.target.value)} label='firstname' id='formControlLg' type='text' size='lg' />
                    <br />
                    <MDBInput onChange={(e) => setPhone(e.target.value)} label='phone' id='formControlLg' type='text' size='lg' />
                    <br />
                    <MDBInput onChange={(e) => setEmail(e.target.value)} label='email' id='formControlLg' type='text' size='lg' />
                    <br />
                    <div>
                        <button onClick={(e) => addContact(e)} className='btn btn-success text-center m-2'>ADD <i className='fa-solid fa-user-plus'></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add