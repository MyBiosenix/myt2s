import React, { useState } from 'react'
import '../Styles/complain.css'
import emailjs from '@emailjs/browser';

function ComplainComp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [rid, setRid] = useState('');
    const [complain, setComplain] = useState('');

    const [status, setStatus] = useState('')

    const sendComplain = (e) => {
        e.preventDefault();

        if(!name || !email || !phone || !rid || !complain ){
            setStatus('Please Fill all the Fields');
            return;
        }


        const templateparams = {
            name:name,
            email:email,
            phone:phone,
            rid:rid,
            complain:complain
        }

        emailjs.send(
            "service_wpphot5",
            "template_vw82zj7",
            templateparams,
            "tYY-vfdd_MgvObNww"
        )
        .then(
            (response) => {
                setStatus("Message Sent Succesfully");
                setName('');
                setEmail('');
                setPhone('')
                setRid('');
                setComplain('');
            },
            (error) => {
                setStatus("Failed to send Message. Try Again!")
            }
        );

    }

  return (
    <div className='complain'>
      <div className='mycomplain'>
        <p>We are not Solving complaints from other websites because we are not checking those websites. We are solving only complaints submitted on our website.
        This Complaint form is for recruited Typists (freelancers).</p>
        <p>Fill complaint form given below. We will solve complaint within 3 working days.</p>

        <p style={{ color:'red' }}>NOTE: If you are new applicant and you have any issue then you can send emails to info@tech2shinelabs.com</p>
      </div>
      <div className='compform' data-aos="fade-down">
        <div className='inform'>
            <input type='text' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type='text' placeholder='Enter Phone Number' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            <input type='text' placeholder='Enter Email Id' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type='text' placeholder='Enter Registration Id' value={rid} onChange={(e)=>setRid(e.target.value)}/>
            <textarea placeholder='Write Your Complain Here' value={complain} onChange={(e)=>setComplain(e.target.value)}/>
        </div>
        <button onClick={sendComplain}>Submit Complain</button>
        {status && <p className='status' style={{textAlign:'center'}}>{status}</p>}
      </div>
    </div>
  )
}

export default ComplainComp
