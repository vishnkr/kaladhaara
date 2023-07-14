import {loadStripe, Stripe} from '@stripe/stripe-js/pure';


const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!);

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {

  if (!stripePromise) {

    stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY!);

  }

  return stripePromise;

};


export default getStripe;