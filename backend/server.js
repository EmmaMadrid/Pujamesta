const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('pk_test_51P3tpSCExtLBu1XZ5cBhS37icvXqLIIrW9ZdJYLWcumHCd5MGnUmdxXpp8U07z7ODP8GFFqXl1NyRl2pf3eqUFA600hn1IbqP8'); // Reemplaza con tu clave secreta de Stripe

const app = express();
const port = 5000; // Puedes elegir cualquier puerto que esté disponible

app.use(cors());
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { item } = req.body;

    // Crear una sesión de checkout en Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: item.title,
              images: [item.pictures[0]] // La primera imagen del producto
            },
            unit_amount: Math.round(item.currentPrice * 100) // Convertir a centavos
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success', // URL a la que redirigir después del pago
      cancel_url: 'http://localhost:3000/cancel' // URL a la que redirigir si el usuario cancela el pago
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Error al crear la sesión de checkout:', error);
    res.status(500).send('Error al crear la sesión de checkout');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
