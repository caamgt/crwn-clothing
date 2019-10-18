import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_8LeYVgXpU7sY8AjzQTVAd6jx0004IDrta1';
    const onToken = token =>  {
        console.log(token);
        alert('Pagora realizado exitosamente');
    }

    return (
        <StripeCheckout 
            label='Pagar Ahora'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Tu total es $${price}`}
            amount={priceForStripe}
            panelLabel='Pagar Ahora'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;