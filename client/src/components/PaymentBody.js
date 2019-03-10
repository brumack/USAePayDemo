import React from 'react'

import { Grid } from 'semantic-ui-react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import CheckoutTable from './CheckoutTable'
import CheckoutForm from './CheckoutForm'

const PaymentBody = props => {
  const { handleChange, handleSubmit, handleClose, productName, productPrice, cardInfo } = props
  const { number, cardholder, expMonth, expYear, cvc } = cardInfo
  return (
    <div>
      <CheckoutTable productName={productName} productPrice={productPrice} />
      <Grid>
        <Grid.Row>
          <Cards
            number={number || ''}
            name={cardholder || ''}
            expiry={expMonth + expYear || ''}
            cvc={cvc || ''}
          />
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <CheckoutForm cardInfo={cardInfo} handleChange={handleChange} handleSubmit={handleSubmit} handleClose={handleClose} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default PaymentBody
