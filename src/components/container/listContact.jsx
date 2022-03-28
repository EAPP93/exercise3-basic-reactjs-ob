import React,{useState,useEffect} from 'react';
import { Contact } from '../../models/contact.class';
import Formcontact from '../pure/forms/formContact'
import Contactcomponent from '../pure/contact';


const Listcontact = () => {

    const defaultContact = new Contact('edwing','picado','empireeapp@gmail.com',685416916,false);


    const [Contacts, setContacts] = useState([defaultContact]);


    useEffect(() => {
        console.log('hay cambios en la lista de contactos',Contacts.length)
        return () => {
            console.log('se han borrado elementos')
        };
    }, [Contacts]);

    function refresh(contact) {
        const index = Contacts.indexOf(contact);
        const tempContacts = [...Contacts];
        tempContacts[index].connectionStatus = !tempContacts[index].connectionStatus
        setContacts(tempContacts)
    }

    function addContact(contact) {
        const tempContacts = [...Contacts]
        tempContacts.push(contact)
        setContacts(tempContacts)
    }

    function removeContact(contact) {
        const index = Contacts.indexOf(contact);
        const tempContacts = [...Contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);
    }
    
    return (
        <div className='contenedor container-fluid gx-0'>
            <header className='cabecera text-center'>
                <h1>Hola mundo</h1>
            </header>
            <main>
                <section className='formulario'>
                    <p className='text-center ' >Enter the data for create a contact</p>
                    <Formcontact className='form' add={addContact} ></Formcontact>
                </section>

                <section>
                    <table className='table'>
                        <thead className='d-none' style={{backgroundColor: 'green'}}>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email Address</th>
                                <th scope="col">Number Phone</th>
                                <th scope="col">Connection Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Contacts.length > 0 ?
                            Contacts.map( (contact ,i) => <Contactcomponent index ={i} contact ={contact} remove = {removeContact} refreshcConnectionStatus ={refresh}></Contactcomponent>) :
                            <h3 className='text-center mt-2'>Ingrese datos</h3>}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default Listcontact;
