import React, { useState } from "react";
import "./Notifications.css";
import img1 from '../notifications/ff1.jpg';
import img2 from '../notifications/ff2.jpg';
import img3 from '../notifications/ff3.jpg';
import img4 from '../notifications/ff4.jpg';
import img5 from '../notifications/ff5.jpg';
const Notifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    {
      id: 1,
      backgroundImage:
        `url(${img1})`,
      text: "1",
    },
    {
      id: 2,
      backgroundImage:
        `url(${img2})`,
      text: "2",
    },
    {
      id: 3,
      backgroundImage:
        `url(${img3})`,
      text: "3",
    },
    {
      id: 4,
      backgroundImage:
        `url(${img4})`,
        
      text: "4",
    },
    {
      id: 5,
      backgroundImage:
        `url(${img5})`,
      text: "5",
    },
  ];

  return (
    <div className="cont">
        <div className="service">
            <h1>Our Services</h1>
            <p>ShiftFlow offers a seamless and efficient scheduling solution with the following key features:<br/>
                User Dashboard: Easily view your shift schedules, manage your profile, and submit feedback. Stay informed with real-time notifications.<br/>
                Admin Panel: Create and manage shift schedules, oversee user management, and monitor team performance. Communicate effectively with automated notifications and announcements.<br/>
                Schedule Making: Simplify scheduling with a drag-and-drop interface, customizable timeframes, and conflict management. Automated reminders keep everyone on track.<br/>
                The below images represent the functionalities like Admin and User panel etc... provided by us</p>
                <br/>
        </div>
    <div className="container">
      {panels.map((panel, index) => (
        <div
          key={panel.id}
          className={`panel ${activeIndex === index ? "active" : ""}`}
          style={{ backgroundImage: panel.backgroundImage }}
          onClick={() => setActiveIndex(index)}
        >
          <h3>{panel.text}</h3>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Notifications;
