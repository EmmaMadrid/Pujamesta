import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {
  StyledGrid,
  StyledTitleContainer,
  StyledTitle,
  StyledDetailsGrid,
  StyledGridItem,
  StyledCurrency,
  StyledPaymentForm,
  StyledButton,
  StyledErrorMessage
} from './styles';

// Cargar la clave pública de Stripe
const stripePromise = loadStripe('pk_test_51P3tpSCExtLBu1XZ5cBhS37icvXqLIIrW9ZdJYLWcumHCd5MGnUmdxXpp8U07z7ODP8GFFqXl1NyRl2pf3eqUFA600hn1IbqP8');

const CheckoutForm = ({ item }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
    } else {
      // Aquí puedes enviar `paymentMethod.id` a tu backend para procesar el pago
      console.log('Payment method created:', paymentMethod);
      // Redirigir o mostrar un mensaje de éxito
    }
  };

  return (
    <StyledPaymentForm onSubmit={handleSubmit}>
      <CardElement />
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      <StyledButton type="submit" disabled={!stripe}>Pagar Ahora</StyledButton>
    </StyledPaymentForm>
  );
};

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const item = location.state?.item;

  useEffect(() => {
    if (!item) {
      navigate('/error', { replace: true });
    }
  }, [item, navigate]);

  if (!item) return <StyledErrorMessage>No se encontraron detalles del artículo.</StyledErrorMessage>;

  return (
    <StyledGrid>
      <StyledTitleContainer>
        <StyledTitle>Pagar por el artículo: {item.title}</StyledTitle>
      </StyledTitleContainer>
      <StyledDetailsGrid>
        <StyledGridItem>
          <p>Precio: {Number(item.currentPrice).toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}&nbsp;
            <StyledCurrency>{item.currency || 'EUR'}</StyledCurrency>
          </p>
        </StyledGridItem>
        <StyledGridItem>
          <p>Descripción: {item.description}</p>
        </StyledGridItem>
      </StyledDetailsGrid>
      <Elements stripe={stripePromise}>
        <CheckoutForm item={item} />
      </Elements>
    </StyledGrid>
  );
};

export default Payment;
