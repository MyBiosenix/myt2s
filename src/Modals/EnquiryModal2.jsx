    import React, { useState, useEffect } from 'react';
    import '../styles/enquirymodal.css'


    function EnquiryModal({ show, onClose, selectedPlan }) {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [number, setNumber] = useState('');
    const [numberError, setNumberError] = useState('') 
    const [selectedProject, setSelectedProject] = useState('Data Segregation');
    const [plan, setPlan] = useState(selectedPlan);

    useEffect(() => {
        setPlan(selectedPlan);
    }, [selectedPlan]);


    const handleSend = async(e) => {

        e.preventDefault();
        setNameError('');
        setNumberError('');

        if(name === '' || number === ''){
            alert('Please Fill All the Fields');
            return;
        }
        else if(number.length<10){
            setNumberError('Number Length should be 10');
            return;
        }

        const formData = new FormData();
        formData.append('access_key','7ac78ac6-2cc9-47a0-a39a-9d62f551c126')
        formData.append('name',name);
        formData.append('phone',number);
        formData.append('project',selectedProject);
        formData.append('plan',plan);

        try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alert('Form submitted successfully!');

        setName('');
        setNumber('');
        setSelectedProject('Data Conversion');
        setPlan(selectedPlan || 'Silver');
        onClose();
      } else {
        alert('Form submission failed. Please try again.');
      }
    } 
    catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='modal-backdrop'>
        <div className='modal-box'>
            <h2>Tenr Global Solution</h2>
            <form className='modal-box1' onSubmit={handleSend}>
            <input
            type='text'
            placeholder='Enter Name'
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
            required
            />

            <input
            type='tel'
            placeholder='Enter Phone Number'
            value={number}
            name='number'
            onChange={(e) => setNumber(e.target.value)}
            required
            />
            {numberError && <p className='error'>{numberError}</p>}

            <select
            id='project'
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            >
            <option value="Data Conversion">Data Conversion</option>
            <option value="Data Segregation">Data Segregation</option>
            <option value="Bank Captcha Verifier">Bank Captcha Verifier</option>
            </select>

            <select
            id='plan'
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            >
            <option value="Gold">Gold</option>
            <option value="VIP">VIP</option>
            <option value="Diamond">Diamond</option>
            </select>

            <div className='modal-actions'>
            <button onClick={onClose}>Cancel</button>
            <button>Submit</button>
            </div>
            </form>
        </div>
        </div>
    );
    }

    export default EnquiryModal;