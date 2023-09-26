// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NoGsrJL9cid2s5P3gUKNkFqfPzsZhgDzhLqLXWDYSn7uSULSudvaPP7Rs3jKnqXvXqHqRgMQKPRO7WgqzZ4wzuk00e2fsoQdn');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('http://localhost:3000/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1NoRaMJL9cid2s5P0CZmKmC1',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));