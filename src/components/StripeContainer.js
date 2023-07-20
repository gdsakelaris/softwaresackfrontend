import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_live_51NH8wuDVWcsv0GQDGh4E7AHXRr06DnRWDSp6fOlhR7MgbcNWaFFvgQh9oAc4NqNdgScgEfy1uDPvptyfDt4oDpFs00pbDe48Me"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}