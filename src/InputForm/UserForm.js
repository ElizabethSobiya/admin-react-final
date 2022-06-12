import { useState } from "react";

export default function UserForm() {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

//   const handleChange = (event) => {
//     setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
//   };

// {addContact} onChange={handleSubmit}
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(contactInfo);
//     setContactInfo({ name: "", email: "", phonenumber: "" });
//   };

 

  return (
    <div className="form-container">
      <form>
        <div>
          <h3>Contact Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactInfo.name}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
          />
        </div>
        <div>
          <input
            type="number"
            name="phonenumber"
            placeholder="Phone Number"
            value={contactInfo.phonenumber}
          />
        </div>
        <div>
          <button  >Submit Contact</button>
        </div>
      </form>
    </div>
  );
}
