import React from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const service_id = process.env.REACT_APP_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_key = "zcEi4mqmY9Y4M7iK9";
  const [formStatus, setFormStatus] = React.useState("Send");
  const [error, setError] = React.useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sending...");
    const from_name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const templateParams = {
      from_name,
      email,
      message,
    };
    emailjs
      .send(service_id, template_id, templateParams, public_key)
      .then((result) => {
        if (result.status === 200) {
          setFormStatus("Sent!");
          e.target.reset();
        } else {
          setError("Something went wrong. Please try again later.");
          setFormStatus("Send");
        }
      });
  };

  return (
    <div className='outer'>
      <div className='container mt-5'>
        <div className='color-div'>
          <h1 className='mb-4'>Send me an Email</h1>
          <p className='email'>
            mathesonchisholm@hotmail.com <br />
            (778)-587-2006
          </p>
          <a
            href='https://www.linkedin.com/in/matt-chisholm10/'
            target='_blank'
            rel='noreferrer'>
            <img src='https://img.icons8.com/color/48/null/linkedin-circled--v1.png' />
          </a>
          <a
            href='https://github.com/Matt-Chisholm'
            target='_blank'
            rel='noreferrer'>
            <img src='https://img.icons8.com/ios-glyphs/60/null/github.png' />
          </a>
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
              <input
                className='form-control'
                type='email'
                id='email'
                required
              />
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
            {error && <p className='error'>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
