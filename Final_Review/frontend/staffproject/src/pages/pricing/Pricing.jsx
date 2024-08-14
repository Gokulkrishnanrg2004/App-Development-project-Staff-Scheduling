// // src/SubscriptionPage.js
// import React from "react";
// import "./Pricing.css"; // Import the CSS file for styling
// import { useNavigate } from "react-router-dom";

// const Pricing = () => {

//   const nav=useNavigate();
//   const plans = [
//     {
//       name: "Basic",
//       price: "₹ 29.99",
//       features: [
//         "- Manage up to 10 staff members",
//         "- Create and view schedules",
//         "- Basic user management",
//       ],
//     },
//     {
//       name: "Standard",
//       price: "₹ 49.99",
//       features: [
//         "- Manage up to 50 staff members",
//         "- Advanced schedule creation and optimization tools",
//         "- Role-based access control",
//         "- Priority email and chat support",
//       ],
//     },
//     {
//       name: "Premium",
//       price: "₹ 99.99",
//       features: [
//         "- Full customization of features",
//         "- Personalized onboarding and training",
//         "- Premium support and service level agreements (SLAs)",
//       ],
//     },
//   ];

//   return (
//     <div className="subscription-page" id="subss">
//       <h1>Make your plan!</h1>
//       <p style={{color:"black"}}>Tailor your perfect schedule and take control of your day with ShiftFlow, where your time meets flexibility</p>
//       <div className="plans-container">
//         {plans.map((plan) => (
//           <div className="plan-card" key={plan.name}>
//             <h2 style={{color:"black"}}>{plan.name} Plan</h2>
//             <p className="plan-price">{plan.price} / month</p>
//             <ul className="plan-features">
//               {plan.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//             <button className="subscribe-button" onClick={(()=> nav('/payment'))}>Pay Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing;


import React from "react";
import "./Pricing.css";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Basic",
      price: "29.99",
      features: [
        "- Manage up to 10 staff members",
        "- Create and view schedules",
        "- Basic user management",
      ],
    },
    {
      name: "Standard",
      price: "49.99",
      features: [
        "- Manage up to 50 staff members",
        "- Advanced schedule creation and optimization tools",
        "- Role-based access control",
        "- Priority email and chat support",
      ],
    },
    {
      name: "Premium",
      price: "99.99",
      features: [
        "- Full customization of features",
        "- Personalized onboarding and training",
        "- Premium support and service level agreements (SLAs)",
      ],
    },
  ];

  return (
    <div className="subscription-page" id="subss">
      <h1>Make your plan!</h1>
      <p style={{color:"black"}}>Tailor your perfect schedule and take control of your day with ShiftFlow, where your time meets flexibility</p>
      <div className="plans-container">
        {plans.map((plan) => (
          <div className="plan-card" key={plan.name}>
            <h2 style={{color:"black"}}>{plan.name} Plan</h2>
            <p className="plan-price">₹ {plan.price} / month</p>
            <ul className="plan-features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className="subscribe-button"
              onClick={() => navigate('/payment', { state: { amount: plan.price, planName: plan.name } })}
            >
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
