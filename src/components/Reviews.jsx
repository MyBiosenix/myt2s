import React from 'react'
import '../Styles/review.css'
import ReviewProp from '../Props/ReviewProp'
import google from '../assets/google.png'
import re1 from '../assets/31.jpg'
import re2 from '../assets/32.jpg'
import re3 from '../assets/33.jpg'
import re4 from '../assets/34.jpg'
import { FiStar} from 'react-icons/fi'

function Reviews() {
  return (
    <div className='myrevs'>
        <h3>What Our Participants Say</h3>
        <div className='inmyrevs'data-aos="fade-down">
            <ReviewProp
                google={google}
                content="Perfect if you want to work from home. The support is helpful, and I’m honestly happy that I trusted this and earned money."
                image={re1}
                name="Vaishali Jadhav"
            />

            <ReviewProp
                google={google}
                content="The support team is quick to respond and the projects are legit. Great experience so far."
                image={re2}
                name="Harsh Dongre"
            />

            <ReviewProp
                google={google}
                content="Great experience! I've completed multiple tasks and every Estimated Earnings came through without delay."
                image={re3}
                name="Sakshi Wagh"
            />
            <ReviewProp
                google={google}
                content="Reliable platform for remote work. Estimated Earningss are always on time, and support is responsive."
                image={re4}
                name="Kashish Kushwaha"
            />
        </div>
    </div>
  )
}

export default Reviews
