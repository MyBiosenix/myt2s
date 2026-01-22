import React from 'react';
import '../Styles/reviewModal.css'; // reuse same styling

function ThankYouModal() {
  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2>Thank You!</h2>
        <p>Your review has been successfully recorded and will be live soon.</p>
      </div>
    </div>
  );
}

export default ThankYouModal;
