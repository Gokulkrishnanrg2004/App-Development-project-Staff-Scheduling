import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/Pro.css';

const Payment = () => {
    const nav = useNavigate();
    const location = useLocation();
    const { plan = 'default', amount = 0 } = location.state || {};  // Get the plan and amount from the state
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve) => {
                // Check if the script is already present
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve(true);
                    return;
                }

                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve(true);
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            });
        };

        const initiatePayment = async () => {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

            if (!res) {
                alert('Razorpay SDK failed to load. Are you online?');
                return;
            }

            setScriptLoaded(true);

            const options = {
                key: 'rzp_test_GcZZFDPP0jHtC4',
                amount: amount * 100, // Convert amount to the smallest currency unit (e.g., paise for INR)
                currency: 'INR',
                name: 'Play+',
                description: `${plan} Plan Payment`,
                handler: function (response) {
                    console.log(`Payment ID: ${response.razorpay_payment_id}`);
                    nav("/home");  // Redirect to the home page after payment
                },
                prefill: {
                    name: 'MakeMySHift',
                    email: 'shift@example.com',
                    contact: '91300040030'
                },
                notes: {
                    address: 'Razorpay Corporate Office'
                },
                theme: {
                    color: '#F37254'
                }
            };

            if (scriptLoaded) {
                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            }
        };

        initiatePayment();

        // Cleanup function to remove the script
        return () => {
            const script = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
            if (script) {
                document.body.removeChild(script);
            }
        };
    }, [amount, plan, nav, scriptLoaded]);

    return (
        <div className="payment-container">
            <h1 className="payment-title">Processing Payment for {plan} Plan...</h1>
            <p>Please wait while we redirect you to the payment page.</p>
        </div>
    );
}

export default Payment;
