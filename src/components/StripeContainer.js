import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"

// LIVE:
const LIVE_PUBLISHABLE_KEY = "pk_live_51NH8wuDVWcsv0GQDGh4E7AHXRr06DnRWDSp6fOlhR7MgbcNWaFFvgQh9oAc4NqNdgScgEfy1uDPvptyfDt4oDpFs00pbDe48Me"

// TEST:
// const TEST_PUBLISHABLE_KEY = "pk_test_51NH8wuDVWcsv0GQDDA50qRas53ULlGs0w9GHQARixVZhS4PUYwJlyMOf0EaQOwAIcsiysa9EGI6kiSypsAbezWeF007HfK5Tya"

const stripeTestPromise = loadStripe(LIVE_PUBLISHABLE_KEY)
// const stripeTestPromise = loadStripe(TEST_PUBLISHABLE_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}