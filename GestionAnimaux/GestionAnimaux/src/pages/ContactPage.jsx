import { useEffect } from 'react'
import reducer from '../reducer/reducer.jsx'
import FormContact from '../components/FormContact.jsx'
import TableauContact from '../components/FormContact.jsx'



const ContactPage = ({state, dispatch, edittingContact}) => {
    
    

    
  
 const handleNewContact = () => {
   
   dispatch({type: 'new'});
 }
 
 const handleEditContact = (contact) => {
   
   dispatch({type: 'edit', contact})
   
 }
 
 const handleDeleteContact = (contact) => {
     
     dispatch({type: 'delete', contact})
 }
    
    return(
        <>
        <FormContact />
      <button onClick={handleNewContact}>Ajouter</button>
        </>
        );
    
    
    
    
}

export default ContactPage;