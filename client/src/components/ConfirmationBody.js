import React from 'react'
import Checkmark from './Checkmark'
import './ConfirmationBody.css'

import { Image, Message, Grid, Container, Header } from 'semantic-ui-react'

const ConfirmationBody = props => {
  const { productName, productImage, result } = props
  const { auth_amount, creditcard, refnum } = result
  const lastFour = creditcard.number.substring(creditcard.number.length - 4)
  return (
    <div>
      <Container>
        <Grid columns={2} stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={5}>
              <Checkmark />
            </Grid.Column>
            <Grid.Column width={11}>
              <Message>
                <Grid columns={2} stackable verticalAlign='middle'>
                  <Grid.Row>
                    <Grid.Column textAlign='center' width={4}>
                      <Image size='small' src={productImage} />
                    </Grid.Column>
                    <Grid.Column width={12}>
                      <Header as='h2' id='productHeader'>{productName}</Header>
                      <p><strong>Charge amount:</strong> ${auth_amount}</p>
                      <p><strong>Card ending in:</strong> {lastFour}</p>
                      <p><strong>Reference #:</strong> {refnum}</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <p id='thankYou'>Thank you for your purchase. Your item will be shipped within 24 business hours.</p>
      </Container>
    </div>
  )
}

export default ConfirmationBody
