import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" },
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee",
        },
    },
};

export default function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const bucket = "software-sack"
    const key = "Code2Text.exe";
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                // Replace with your LIVE Publishable Stripe API key
                const stripeApiKey =
                    "pk_live_51NH8wuDVWcsv0GQDGh4E7AHXRr06DnRWDSp6fOlhR7MgbcNWaFFvgQh9oAc4NqNdgScgEfy1uDPvptyfDt4oDpFs00pbDe48Me";
                // Replace with your TEST Publishable Stripe API key
                // const stripeApiKey =
                //     "pk_test_51NH8wuDVWcsv0GQDDA50qRas53ULlGs0w9GHQARixVZhS4PUYwJlyMOf0EaQOwAIcsiysa9EGI6kiSypsAbezWeF007HfK5Tya";
                const response = await axios.post(
                    `${process.env.REACT_APP_BACKEND_URL}payment`,
                    {
                        // amount: 100,
                        amount: 100,
                        id,
                        bucket,
                        key,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${stripeApiKey}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.data.success) {
                    console.log("Successful payment");
                    setSuccess(true);
                    // Download the file after successful payment
                    window.location.href = response.data.downloadUrl;
                }

            } catch (error) {
                console.log("Error", error);
            }
        } else {
            console.log(error.message);
        }
    };

    return (
        <>
            {!success ? (
                <form onSubmit={handleSubmit}>
                    <fieldset className="FormGroup">
                        <div className="FormRow">
                            <CardElement options={CARD_OPTIONS} />
                        </div>
                    </fieldset>
                    <button>Pay</button>
                </form>
            ) : (
                <div>
                    <h2>Successfully Purchased</h2>
                </div>
            )}
        </>
    );
}
