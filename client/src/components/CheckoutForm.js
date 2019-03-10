import React from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'

const CheckoutForm = props => {
  const { handleChange, handleSubmit, handleClose, cardInfo } = props
  const { cardholder, number, expMonth, expYear, cvc, avs_street, avs_zip } = cardInfo
  return (
    <div>
      <Form size='small' >
        <Form.Group>
          <Form.Input required name='cardholder' label='Name' placeholder='Full Name' value={cardholder} onChange={handleChange} width={16} />
        </Form.Group>
        <Form.Group>
          <Form.Input required name='number' label='Card Number' placeholder='Card Number' onChange={handleChange} value={number} width={16} />
        </Form.Group>
        <Form.Group>
          <Form.Input required name='expMonth' label='Exp Month' placeholder='MM' onChange={handleChange} value={expMonth} width={16} />
          <Form.Input required name='expYear' label='Exp Year' placeholder='YYYY' onChange={handleChange} value={expYear} width={16} />
          <Form.Input required name='cvc' label='CVC' placeholder='CVC' onChange={handleChange} value={cvc} width={14} />
        </Form.Group>
        <Form.Group>
          <Form.Input required name='avs_street' label='Street Address' placeholder='Street' onChange={handleChange} value={avs_street} width={16} />
          <Form.Input required name='avs_zip' label='Zip Code' placeholder='Zip Code' onChange={handleChange} value={avs_zip} width={16} />
        </Form.Group>
        <Button.Group floated='right'>
          <Button color='red' onClick={handleClose}>
            <Icon name='cancel' /> Cancel
          </Button>
          <Button type='submit' color='green' onClick={handleSubmit}>
            <Icon name='checkmark' /> Purchase
          </Button>
        </Button.Group>
      </Form>

    </div >
  )
}

export default CheckoutForm
