import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './contact.scss';

export default function Contact() {
  const [message,setMessage] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_25wqzdm', 'template_rwsdk1l', e.target, 'user_AeU4twFKuQ4TP0CkLWAei')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (


    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/handshake.svg" alt=""/>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name"/>
          <input type="email" placeholder="Email Address" name="email"/>
          <textarea placeholder="Your message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thank you! I'll reply soon. 😄</span>}
        </form>
      </div>
    </div>
  
  );
}