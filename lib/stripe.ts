import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  // If not working, use this apiVersion --> "2022-11-15"
  apiVersion: "2023-08-16",
  typescript: true,
});
