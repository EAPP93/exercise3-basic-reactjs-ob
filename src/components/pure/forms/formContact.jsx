import React, { useRef } from 'react';
import { Contact } from '../../../models/contact.class';

const Formcontact = ({ add }) => {

    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const emailAddressRef = useRef('')
    const numberPhoneRef = useRef(0)
    const connectionStatusRef = useRef(false)

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            emailAddressRef.current.value,
            numberPhoneRef.current.value,
            connectionStatusRef.current.value
        )

        add(newContact);
        console.log(`se ha creado un nuevo contacto desde el formulario con los siguientes datos ${newContact.name} ${newContact.connectionStatus}`)
    }
    
    
    return (
        <form onSubmit={addContact} className='container row-6 px-5'>

            <div >
                <label htmlFor='inputNameRef' className="form-label">Enter your name</label>
                <input type={'text'} ref={nameRef} id='inputNameRef' placeholder='name' className="form-control" ></input>
            </div>

            <div >
                <label htmlFor='inputNameRef' className="form-label">Enter your last name</label>
                <input type={'text'} ref={lastNameRef} id='inputNameRef' placeholder='last name' className="form-control" ></input>
            </div>

            <div  >
                <label htmlFor='inputNameRef' className="form-label" >Enter your email address</label>
                <input type={'email'} ref={emailAddressRef} id='inputNameRef' placeholder='email address' className="form-control" ></input>
            </div>

            <div >
                <label htmlFor='inputNameRef' className="form-label" >Enter your number phone</label>
                <input type={'number'} ref={numberPhoneRef}  id='inputNameRef' placeholder='number phone' className="form-control" ></input>
            </div>

            <div >
                <label htmlFor='connectionStatusRef'>Connection Status</label>
                <input ref={connectionStatusRef} type={'checkbox'} id='connectionStatusRef'></input>
            </div>

            <div className='text-center' >
                <button type='submit' className="btn-lg btn-success my-3">
                    Send data
                </button>
            </div>

        </form>
    );
}

export default Formcontact;
