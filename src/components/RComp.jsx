import React,{useState} from 'react'
import RProp from '../Props/RProp'
import r1 from '../assets/1.jpeg'
import r2 from '../assets/62.jpeg'
import r3 from '../assets/2.jpeg'
import r4 from '../assets/3.jpeg'
import r5 from '../assets/4.jpeg'
import r6 from '../assets/5.jpeg'
import r7 from '../assets/6.jpeg'
import r8 from '../assets/7.jpeg'
import r9 from '../assets/8.jpeg'
import r10 from '../assets/10.jpeg'
import r11 from '../assets/9.jpeg'
import r12 from '../assets/12.jpeg'
import r13 from '../assets/13.jpeg'
import r14 from '../assets/14.jpeg'
import r15 from '../assets/15.jpeg'
import r16 from '../assets/16.jpg'
import r17 from '../assets/17.jpg'
import r18 from '../assets/18.jpg'
import r19 from '../assets/19.jpg'
import r20 from '../assets/20.jpg'
import r21 from '../assets/21.jpg'
import r22 from '../assets/22.jpg'
import r23 from '../assets/23.jpg'
import r24 from '../assets/24.jpg'
import r25 from '../assets/25.jpg'
import locimg from '../assets/building.jpeg'
import mymap from '../assets/mymap.png'
import office3 from '../assets/office3.jpg'
import '../Styles/rcomp.css'
import { FaStar,FaPhone } from 'react-icons/fa'
import { MdReviews } from 'react-icons/md';
import world from '../assets/world.png';
import ReviewModal from '../Modals/ReviewModal'


function RComp() {
    const [showModal, setShowModal] = useState(false);

    const getOrderedWeekDays = () => {
    const hoursMap = {
      Monday: '10 am – 7 pm',
      Tuesday: '10 am – 7 pm',
      Wednesday: '10 am – 7 pm',
      Thursday: '10 am – 7 pm',
      Friday: '10 am – 7 pm',
      Saturday: '10 am – 7 pm',
      Sunday: 'Closed'
    };

    const weekDays = Object.keys(hoursMap);
    const todayIndex = new Date().getDay(); 
    const jsToCustomIndex = [6, 0, 1, 2, 3, 4, 5];
    const todayCustomIndex = jsToCustomIndex[todayIndex];

    const ordered = [
      {
        day: weekDays[todayCustomIndex],
        time: hoursMap[weekDays[todayCustomIndex]],
        isToday: true
      }
    ];

    for (let i = 1; i < 7; i++) {
      const nextIndex = (todayCustomIndex + i) % 7;
      ordered.push({
        day: weekDays[nextIndex],
        time: hoursMap[weekDays[nextIndex]],
        isToday: false
      });
    }

    return ordered;
  };

    const allReviews = [
        {
            user:r1,
            name:"Nandini Gupta",
            review:"The whole process is smooth and transparent from start to finish.",
            rate:4
        },
        {
            user:r2,
            name:"Nilesh Kumar",
            review:"I appreciate how smooth and transparent the entire process is, from applying to getting paid.",
            rate:4
        },
        {
            user:r3,
            name:"Triveni Gollapati",
            review:"Really appreciate how easy everything is to navigate and understand.",
            rate:4
        },
        {
            user:r4,
            name:"Vanita Shenkar",
            review:"Estimated Earningss are always on time, which builds a lot of trust.",
            rate:4
        },
        {
            user:r5,
            name:"Komal Mahto",
            review:"This feels more like a supportive community than just another work opportunity.",
            rate:4
        },
        {
            user:r6,
            name:"Shubhashree H M",
            review:"Estimated Earningss were always on time. That gave me a lot of peace of mind.",
            rate:4
        },
        {
            user:r7,
            name:"Shaikh Muskan",
            review:"Great option for anyone wanting to work from home. Simple and supportive.",
            rate:4
        },
        {
            user:r8,
            name:"Rucha Vidhate",
            review:"Perfect for remote work. Easy tasks and fair payouts.",
            rate:4
        },
        {
            user:r9,
            name:"Krishna Sharma",
            review:"I appreciate how smoothly everything was handled from beginning to end.",
            rate:4
        },
        {
            user:r10,
            name:"Anubha Prajapati",
            review:"Everything was well-organized. I never felt confused at any point.",
            rate:4
        },
        {
            user:r11,
            name:"Kshitij Sawhney",
            review:"I’m really glad I trusted the process. Everything worked just as explained.",
            rate:4
        },
        {
            user:r12,
            name:"VIVEK SINGH",
            review:"The instructions were clear, the support team was patient, and the Estimated Earningss were prompt.",
            rate:4
        },
        {
            user:r13,
            name:"Divya Vikram Singh",
            review:"Never had any issues with payouts. Very dependable.",
            rate:4
        },
        {
            user:r14,
            name:"NARAYAN PARAB",
            review:"Very grateful for the opportunity to work comfortably from home.",
            rate:4
        },
        {
            user:r15,
            name:"Priyanka Mengawade",
            review:"A great option for anyone looking for flexible and reliable remote work.",
            rate:4
        },
        {
            user:r16,
            name:"Harshita Dongre",
            review:"The support team is quick to respond and the projects are legit. Great experience so far.",
            rate:4
        },
        {
            user:r17,
            name:"Jagruti Rahate",
            review:"Estimated Earnings and communication were always straightforward and honest.",
            rate:4
        },
        {
            user:r18,
            name:"Suraj Suryawanshi",
            review:"Such a smooth Estimated Earnings process. Definitely trustworthy.",
            rate:4
        },
        {
            user:r19,
            name:"Sayali Ghanot",
            review:"Clear work, clear expectations, and clear Estimated Earningss.",
            rate:4
        },
        {
            user:r20,
            name:"Trupti Tate",
            review:"Easy to track my tasks and earnings. Very user-friendly.",
            rate:4
        },
        {
            user:r21,
            name:"Prachi Malhotra",
            review:"The sense of community is what makes this so special.",
            rate:4
        },
        {
            user:r22,
            name:"Aditi Singh",
            review:"I appreciate the kindness and patience shown throughout the process.",
            rate:4
        },
        {
            user:r23,
            name:"Amisha Singh",
            review:"It’s rare to find such a welcoming environment, especially for remote work.",
            rate:4
        },
        {
            user:r24,
            name:"HARICHANDANA",
            review:"Clear steps, quick responses, and reliable support. Couldn’t ask for more.",
            rate:4
        },
        {
            user:r25,
            name:"Kiran Varma Maddhela",
            review:"I appreciate how smooth and transparent the entire process is, from applying to getting paid.",
            rate:4
        },
    ]

  return (
    <>
    <div className='myrs'>
      <div className='myrs1' data-aos="fade-right">
        <h3>Reviews</h3>
        <div className='inrs1'>
            {allReviews.map((item,index) => (
                <RProp
                    key={index}
                    user={item.user}
                    name={item.name}
                    rate={item.rate}
                    review={item.review}
                />
            ))}
        </div>
      </div>
      <div className='myrs2' data-aos="fade-left">
        <div className='myimgs12'>
            <img src={locimg} alt='office2' className='byy' />
            <div className='in-myimgs12'>
                <img src={mymap} alt='mymap' className='hyy' />
                <img src={office3} alt='office3' className='hyy' />
            </div>
        </div>
        
        <div className='names'>
          <h3>Tech2Shine Labs</h3>
          <div className='starts'>
            <label style={{ color: 'black', }}>4.1</label>
            <div className='rateicon1'><FaStar className='gold'/><FaStar className='gold'/><FaStar className='gold'/><FaStar className='gold'/><FaStar className='empty' /></div>
                <label><u>376 Reviews</u></label>
          </div>
        </div>
        
        <div className='mynavs'>
            <div className='in-mynavs' onClick={() => navigate('/')}>
                <img src={world} className='reviewpicon3' alt="Website" />
                <p>Website</p>
            </div>
            <div className='in-mynavs'>
                <FaPhone className='reviewpicon1' />
                <p>Phone</p>
            </div>
            <div className='in-mynavs' onClick={() => setShowModal(true)}>
                <MdReviews className='reviewpicon' />
                <p>Reviews!</p>
            </div>
        </div>
        
        <div className='add'>
            <p><span style={{ fontWeight: 'bold' }}>Address:</span>Bommanahalli, Bangalore,Karnataka, 560068</p>
        
            <div className='hours'>
                <details>
                    <summary>
                        <strong>Hours: {getOrderedWeekDays()[0].day} {getOrderedWeekDays()[0].time}</strong>
                    </summary>
                    <ul className='hours-list'>
                        {getOrderedWeekDays().slice(1).map(({ day, time }, index) => (
                          <li key={index}>
                            {day}: <span>{time}</span>
                          </li>
                        ))}
                    </ul>
                </details>
            </div>
        </div>
      </div>
    </div>

    <ReviewModal 
              show={showModal}
              onClose={() => setShowModal(false)}
    />
    </>
  )
}

export default RComp
