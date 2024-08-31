// server.js
const express = require('express');
const { Stripe } = require('stripe');
const app = express();
const port = 4242;

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY); // Stripe test secret key'inizi buraya ekleyin

app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.items,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json({ id: session.id });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
