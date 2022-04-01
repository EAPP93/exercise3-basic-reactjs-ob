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
        <tr className='row text-center'>
            <th className='col-1' scope="row">{index+1}</th>
            <td className='col-3'>{contact.name}</td>
            <td className='col-3'>{contact.lastName}</td>
            <td className='col-2'>{contact.emailAddress}</td>
            <td className='col-2'>{contact.numberPhone}</td>
            <td className='col-1'>
                {contactConnectionStatus()}
                <i className='bi-trash task-action' style={{color: 'tomato'}} onClick={()=>remove(contact)}></i>
            </td>
        </tr>
    );
}

export default Contactcomponent;
