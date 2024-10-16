import React from 'react'
import './ContactHome.css'
import Swal from 'sweetalert2'
const ContactHome = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "397bc7c8-ad7b-4833-a40e-78e6ff28082c");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Success",
            text: "Message sent Successfully",
            icon: "success"
          });
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <section className="contact">
        <form onSubmit={onSubmit}>
            <h2>Contact <span>Maility</span></h2>
            <div className="input-box">
                <label >Full Name</label>
                <input type="text" className="field" placeholder='Enter your name' name='name' required/>
            </div>
            <div className="input-box">
                <label >Email Address</label>
                <input type="email" className="field" placeholder='Enter your email' name='email' required/>
            </div>
            <div className="input-box">
                <label htmlFor="">Your Message</label>
                <textarea name='message' className="field mess" placeholder='Enter your message' required></textarea>
            </div>
            <button type='submit'>Send message</button>
        </form>
    </section>
  )
}

export default ContactHome