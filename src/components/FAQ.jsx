import React, { useState } from 'react';
import '../styles/faq.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'Is this a job placement platform?',
      answer:
        'No. Tech2Shine Labs provides onboarding, workflow access, and support services only.',
    },
    {
      question: 'Are earnings guaranteed?',
      answer:
        'No. We never promise guaranteed income or employment.',
    },
    {
      question: 'What is the fee charged for?',
      answer:
        'The fee covers onboarding, training, software access, and operational support.',
    },
    {
      question: 'Is there a refund policy?',
      answer:
        'Yes — subject to our transparent refund terms.',
    },
    {
      question: 'How do I get support?',
      answer:
        'Only via official email and ticket system.',
    }
  ];

  return (
    <div className='myfaqs'>
      <h2>Frequently Asked Questions</h2>
      <div className='faqs'>
        {faqData.map((faq, index) => (
          <div className='in-faq' key={index}>
            <p className='faq-question' onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={`arrow ${activeIndex === index ? 'rotate' : ''}`}>&#9662;</span>
            </p>
            <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
