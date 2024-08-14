// import React from 'react'
// import './About.css'
// import img1 from '../landing/landing1.png'
// import { Link } from 'react-router-dom'
// function About() {
//   return (
//     <div class="wrapper">
//       <h1 className='ah1'>About us</h1>
//       <div class="about-section">
//         <p>
//         Welcome to ShiftFlow, the ultimate solution for seamless staff scheduling. Our mission is to empower businesses of all sizes by simplifying the complex process of workforce management. Whether you’re a small team or a large enterprise, ShiftFlow offers a flexible, intuitive platform that adapts to your unique needs.
//           <br />
//           <br/>
//           At ShiftFlow, we envision a future where workforce management is effortless, dynamic, and deeply connected to the needs of both businesses and employees. We’re committed to providing innovative solutions that drive success and foster a positive workplace culture.
//           <br/>
//           <Link to='/collab'><button>Return to Home</button></Link>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default About
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  const cardData = [
    {
      title: 'Streamlined Management',
      description: 'Simplify the complex process of managing shifts and schedules with our intuitive platform. Our automated system ensures that your staff is always in the right place at the right time, minimizing conflicts and maximizing productivity.',
    },
    {
      title: 'Customizable Schedules',
      description: 'We understand that every business has unique scheduling needs. Our platform offers customizable options that allow you to create schedules that fit your specific requirements, ensuring flexibility and satisfaction for both management and staff.',
    },
    {
      title: 'Real-Time Collaboration',
      description: 'Enhance communication and collaboration with real-time updates and notifications. Whether you need to make last-minute changes or communicate important information, our platform keeps everyone in the loop.',
    },
  ];

  return (
    <>
    <div className='aboutus1'>
      <h1>About Us</h1>
      <p>At ShiftFlow, we are committed to revolutionizing the way businesses manage their workforce. Founded with the vision of streamlining staff scheduling, ShiftFlow offers a powerful and intuitive platform that simplifies the complexities of workforce management. Whether you're a small business or a large enterprise, our solution is designed to meet your unique scheduling needs with efficiency and precision.<br/>

Our team of passionate professionals brings together years of experience in technology and human resources, ensuring that ShiftFlow is not only easy to use but also robust enough to handle the demands of modern businesses. We believe that a well-organized schedule is the backbone of productivity, and our mission is to provide tools that empower businesses to operate smoothly, keep staff engaged, and optimize performance.<br/>

With ShiftFlow, you can expect real-time collaboration, customizable scheduling options, and a user-friendly interface that makes managing shifts a breeze. We are constantly innovating and evolving our platform to meet the changing needs of our clients, always with a focus on delivering exceptional service.</p>
    </div>
    <br/>
    <div className="why-choose-us">
      <Typography variant="h4" className="title" gutterBottom>
        Why Choose Us ?
      </Typography>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="custom-card">
              <CardContent>
                <Typography variant="h5" component="div" className="card-title">
                  {card.title}
                </Typography>
                <Typography variant="body2" className="card-description">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br/>
      <Link to='/collab'><button className='aboutbut'>Return to Home</button></Link>
    </div>
    </>
  );
};

export default About;
