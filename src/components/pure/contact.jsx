import React from 'react';

const Contactcomponent = ( {contact,remove,refreshcConnectionStatus,index} ) => {

    function contactConnectionStatus(){
        if(contact.connectionStatus){
            return (<i onClick={() => refreshcConnectionStatus(contact)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>)
        }else{
            return (<i onClick={() => refreshcConnectionStatus(contact)} className='bi-toggle-off task-action' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr>
            <th scope="row">{index+1}</th>
            <td >{contact.name}</td>
            <td>{contact.lastName}</td>
            <td>{contact.emailAddress}</td>
            <td>{contact.numberPhone}</td>
            <td>
                {contactConnectionStatus()}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={()=>remove(contact)}></i>
            </td>
        </tr>
    );
}

export default Contactcomponent;
