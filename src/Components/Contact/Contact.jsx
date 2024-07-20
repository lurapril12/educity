import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "96a50fe0-6803-4ba7-8fa5-0762297109dc");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send Us A Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through the contact form or find our contact information below. We value your feedback, questions, and suggestions as we strive to enhance our service to the university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />Luredu@university.com</li>
            <li><img src={phone_icon} alt="" />+62 857-777-929-036</li>
            <li><img src={location_icon} alt="" />Menteng Street No. 1, Jakarta<br /> MA - 10310, Indonesia</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Phone Number' required />
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter Your Messages' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
