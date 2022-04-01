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
        <div className='contenedor container mx-auto p-0'>
            <header className='cabecera text-center '>
                <h1 className='col-12'>Hola mundo</h1>
            </header>
            <main className='row-2'>
                <section className='formulario col-12'>
                    <p className='text-center ' >Enter the data for create a contact</p>
                    <Formcontact className='form' add={addContact} ></Formcontact>
                </section>

                <section className='col-12'>
                    <table className='table row-2  m-0'>
                        <thead className='d-none d-lg-grid row m-0' style={{backgroundColor: 'green'}}>
                            <tr className='row '>
                                <th className='col-1' scope="col">#</th>
                                <th className='col-3' scope="col">Name</th>
                                <th className='col-3' scope="col">Last Name</th>
                                <th className='col-2' scope="col">Email Address</th>
                                <th className='col-2' scope="col">Number Phone</th>
                                <th className='col-1' scope="col">Connection Status</th>
                            </tr>
                        </thead>
                        <tbody className='row m-0'>
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
