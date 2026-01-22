import React, { useState, useEffect } from 'react'
import '../Styles/modal.css'

function EnquiryModal({ show, onClose, planName, projectName }) {

    if (!show) return null;

    const [project, setProject] = useState(projectName || "");
    const [plan, setPlan] = useState(planName || "");

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const [nameError, setNameError] = useState("");
    const [numberError, setNumberError] = useState("");

    useEffect(() => {
        setProject(projectName || "");
        setPlan(planName || "");
    }, [projectName, planName]);

    const handleSubmit = async () => {

        if (!name.trim()) {
            setNameError("Name is required");
            return;
        }
        if (!number.trim()) {
            setNumberError("Phone number is required");
            return;
        }

        const formData = new FormData();
        formData.append("access_key", "c5a5b89b-168b-4f8e-b170-b6dd603b28d2");  
        formData.append("name", name);
        formData.append("phone", number);
        formData.append("project", project);
        formData.append("plan", plan);
        formData.append("subject", "New Enquiry from TECH2SHINE Website");
        formData.append("from_name", "Tech2Shine Enquiry Form");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            alert("Enquiry sent successfully!");

            setName("");
            setNumber("");
            setProject("");
            setPlan("");

            onClose(); // close modal
        } else {
            alert("Failed to send enquiry. Please try again.");
        }
    };


    return (
        <div className='modal-overlay'>
            <div className='modal-cont'>
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Tech2Shine Labs</h2>

                <div className='modal-form'>
                    
                    <input
                        type='text'
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setNameError("");
                        }}
                    />
                    {nameError && <p className="error">{nameError}</p>}

                    <input
                        type='text'
                        placeholder='Enter Phone Number'
                        value={number}
                        onChange={(e) => {
                            setNumber(e.target.value);
                            setNumberError("");
                        }}
                    />
                    {numberError && <p className="error">{numberError}</p>}

                    <select value={project} onChange={(e) => setProject(e.target.value)}>
                        <option value="">Select Project</option>
                        <option value="Data Conversion">Data Conversion</option>
                        <option value="Data Segregation">Data Segregation</option>
                        <option value="Bank Captcha Verifier">Bank Captcha Verifier</option>
                    </select>

                    <select value={plan} onChange={(e) => setPlan(e.target.value)}>
                        <option value="">Select Plan</option>
                        <option value="Basic">Basic</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Professional">Professional</option>
                    </select>

                    <button className='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default EnquiryModal
