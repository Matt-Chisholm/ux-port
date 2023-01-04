import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className='container mt-5'>
      <h1 className='mb-4'>Send me an Email</h1>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input className='form-control' type='text' id='name' required />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input className='form-control' type='email' id='email' required />
        </div>
        <div className='mb-3'>
          <label className='form-label' htmlFor='message'>
            Message
          </label>
          <textarea className='form-control' id='message' required />
        </div>
        <button className='form-btn' type='submit'>
          {formStatus}
        </button>
      </form>
    </div>
  );
}
