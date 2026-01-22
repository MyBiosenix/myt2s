import React, { useState } from 'react'
import '../Styles/contact.css'
import { FaWhatsapp, FaEnvelope, FaLocationArrow} from 'react-icons/fa'
import emailjs from '@emailjs/browser';

function ContactComp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        if(!name || !email || !subject || !message){
            setStatus('Please Fill All the Fields');
            return;
        }

        const templateParams = {
            from_name : name,
            from_email : email,
            subject: subject,
            message: message
        }
        emailjs.send(
            "service_wpphot5",
            "template_vw82zj7",
            templateParams,
            "tYY-vfdd_MgvObNww"
        )
        .then(
            (response) => {
                setStatus("Message Sent Succesfully");
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            },
            (error) => {
                setStatus("Failed to send Message. Try Again!")
            }
        );
    };
  return (
    <div className='mycontact'>
      <h3 data-aos="fade-down">Contact Us!</h3>
      <div className='container'>
        <div className='myform' data-aos="fade-right">
            <h4>Send a Message</h4>
            <input type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='text' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='text' placeholder='Enter Your Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            <textarea value={message} placeholder='Enter Your Message to us' onChange={(e)=>setMessage(e.target.value)}/>
            <button onClick={sendEmail}>Submit</button>

            {status && <p className="status">{status}</p>}
        </div>
        <div className='dets' data-aos="fade-left">
            <div className='indet'>
                <FaWhatsapp className='mycon'/>
                <div className='mytxt'>
                    <h5>Chat Support!</h5>
                    <a href="https://wa.me/918448387942" target="_blank" rel="noopener noreferrer">
                        +91 84483 87942
                    </a>
                </div>
            </div>
            <div className='indet'>
                <FaEnvelope className='mycon'/>
                <div className='mytxt'>
                    <h5>Email Id!</h5>
                    <a href="mailto:info@tech2shinelabs.com">
                        info@tech2shinelabs.com
                    </a>
                </div>
            </div>
            <div className='indet'>
                <FaLocationArrow className='mycon'/>
                <div className='mytxt'>
                    <h5>Address!</h5>
                    <a 
                        href="https://www.google.com/maps/place/Bommanahalli,+Bengaluru,+Karnataka/@12.9006227,77.6007098,14z/data=!3m1!4b1!4m6!3m5!1s0x3bae14eec814197d:0xcf0ad378f26271e9!8m2!3d12.9029804!4d77.6241936!16zL20vMGYwazMw?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >

                        Bommanahalli, Bangalore,Karnataka, 560068.</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactComp
