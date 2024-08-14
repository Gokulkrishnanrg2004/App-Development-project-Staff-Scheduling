import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Razorpay from "razorpay";

const Payment = () => {
  const location = useLocation();
  const { amount, planName } = location.state || {};

  useEffect(() => {
    if (amount) {
      // Initialize Razorpay
      const options = {
        key: "rzp_test_9u3kMcqchK88zT", // Enter the Key ID generated from the Dashboard
        amount: amount * 100, // Razorpay accepts amount in paise (multiply by 100)
        currency: "INR",
        name: "ShiftFlow Subscription",
        description: `${planName} Plan Subscription`,
        image: "/your_logo.png", // Add your logo here
        handler: function (response) {
          alert(`Payment successful. Payment ID: ${response.razorpay_payment_id}`);
          // Handle post-payment logic here (e.g., save payment details to the server)
        },
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Corporate Office",
        },
        theme: {
          color: "#000000",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  }, [amount, planName]);

  return (
    <div className="payment-page" style={{marginLeft:"36%",marginTop:"20%"}}>
      <h2>Processing Payment for {planName} Plan...</h2>
      <p style={{border:"2px solid black",width:"200px",textAlign:"center",borderRadius:"5px"}}>Amount: ₹ {amount}</p>
    </div>
  );
};

export default Payment;
