import { useState } from "react";
import UserForm from './UserForm' 
// import UserList from './UserList' 
// import "./App.css";

function Form() {
  // here we create an array state to store the contact form data
  const [contacts, updateContacts] = useState([]);

  const addContact = (contact) => {
    updateContacts([...contacts, contact]);
  };
  console.log(contacts)

  return (
    <div className="Form">
      <UserForm/>
      {/* <UserForm addContact={addContact} /> */}
      {/* <UserList contacts={contacts} /> */}
    </div>
  );
}

export default Form;