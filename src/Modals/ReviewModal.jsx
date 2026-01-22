import React, { useState } from 'react';
import '../Styles/reviewModal.css'
import { FaCamera, FaInfoCircle } from 'react-icons/fa';
import camera from '../assets/camera.svg';
import ThankYouModal from './ThankYouModal'; 
import axios from 'axios';

function ReviewModal({ show, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [image, setImage] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  if (!show && !showThankYou) return null;

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
  if (!name || !rating || !review) {
    alert('Please fill all fields.');
    return;
  }

  let imageUrl = '';

  if (image) {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'web_review'); 
    data.append('cloud_name', 'dzwycjk7h'); 

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dzwycjk7h/image/upload', data);
      imageUrl = res.data.secure_url;
    } catch (error) {
      console.error('Image upload failed:', error);
      alert('Failed to upload image');
      return;
    }
  }


  const formData = new FormData();
  formData.append('access_key', 'c5a5b89b-168b-4f8e-b170-b6dd603b28d2'); 
  formData.append('name', name);
  formData.append('rating', rating.toString());
  formData.append('review', review);
  formData.append('image_url', imageUrl);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await res.json();
    if (result.success) {
      onClose();
      setShowThankYou(true);
      setName('');
      setRating(0);
      setReview('');
      setImage(null);
      setTimeout(() => {
        setShowThankYou(false);
      }, 3000);
    } else {
      alert('Failed to send review');
    }
  } catch (error) {
    console.error('Error sending form:', error);
    alert('Error sending data');
  }
};


  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Tech2Shine Labs</h2>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '18px', color: 'gray' }}>
          Posting publicly across Google
          <FaInfoCircle style={{ fontSize: '14px', cursor: 'pointer' }} />
        </span>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="stars">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            const isActive = starValue <= (hover || rating);
            return (
              <svg
                key={starValue}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill={isActive ? 'Basic' : 'white'}
                stroke="black"
                strokeWidth="0.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-star"
              >
                <polygon points="12 2 15 9 22 9 17 14 18.5 21 12 17 5.5 21 7 14 2 9 9 9" />
              </svg>
            );
          })}
        </div>

        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <label htmlFor="photo-upload" className="custom-file-upload">
          <img src={camera} className='upload-icon' alt="camera" />
          Add photos
        </label>
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        {image && <p className="file-name">Selected: {image.name}</p>}

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button className="close-btn" onClick={handleSubmit}>Post</button>
        </div>
      </div>

      {showThankYou && <ThankYouModal />}

    </div>
  );
}

export default ReviewModal;
