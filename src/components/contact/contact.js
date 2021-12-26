import React from 'react';
import './contact.css'
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState, useContext } from 'react';
import emailjs from 'emailjs-com';



const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formRef = useRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [done, setDone] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_iq4f34s', 'template_3tzj1i4', formRef.current, 'user_NkdFi9IDbVs9vOsTfsSez')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contactame</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +57 3205217199
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              aromeroibague@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Colombia, Caldas
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default contact
