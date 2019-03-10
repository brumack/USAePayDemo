import React from 'react'
import { Button, Icon, Modal, Message, Step } from 'semantic-ui-react'
import SlideMessage from './SlideMessage'
import PaymentBody from './PaymentBody'
import ConfirmationBody from './ConfirmationBody'
import 'react-credit-cards/es/styles-compiled.css'
import local from '../apis/local'
import './CheckoutModal.css'

export default class Checkout extends React.Component {
  state = {
    modalOpen: false,
    cardholder: '',
    number: '',
    expMonth: '',
    expYear: '',
    cvc: '',
    avs_street: '',
    avs_zip: '',
    amount: 0,
    message: null,
    result: null
  }

  maxFieldLength = {
    'number': 16,
    'expMonth': 2,
    'expYear': 4,
    'cvc': 4,
    'avs_zip': 5
  }

  componentDidMount() {
    this.setState({ amount: this.props.product.price })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => {
    this.setState(
      {
        modalOpen: false,
        cardholder: '',
        number: '',
        expMonth: '',
        expYear: '',
        cvc: '',
        avs_street: '',
        avs_zip: '',
        message: null,
        result: null
      })
  }

  handleChange = e => {
    const { name, value } = e.target
    const isNewChar = value.length > this.state[name].length

    if (isNewChar) {
      const newChar = value[value.length - 1]
      if (this.isNumberField(name) && this.isNumber(newChar)) {
        if (value.length <= this.maxFieldLength[name]) {
          return this.setState({ [name]: value })
        }
      } else if (!this.isNumberField(name)) {
        return this.setState({ [name]: value })
      }
    } else {
      return this.setState({ [name]: value })
    }
  }

  isNumber = value => (value.charCodeAt(0) >= 48 && value.charCodeAt(0) <= 57)

  isNumberField = field => ['number', 'expMonth', 'expYear', 'cvc', 'avs_zip'].indexOf(field) !== -1

  handleSubmit = async e => {
    const emptyValues = Object.values(this.state).filter(value => (value != null && value.length < 1))

    if (emptyValues.length === 0) {
      let response

      if (this.props.live) {
        response = await local.post(`/liveTransaction`, this.state)
        if (response.data.error) {
          this.handleError(response.data.error)
        } else {
          this.setState({ result: response.data })
        }
      } else {
        response = await local.post(`/testTransaction`, this.state)
        if (response.data.result === 'Error') {
          this.handleError(response.data.error)
        } else {
          this.setState({ result: response.data })
        }
      }
    }
  }

  handleError = message => {
    this.setState({ message })
    setTimeout(() => this.setState({ message: null }), 3000)
  }

  displayError = () => {
    if (this.state.message !== null) {
      return <Message centered negative>{this.state.message}</Message>
    }
  }

  renderModalBody = () => {
    const { name, price, image } = this.props.product
    const { modalOpen, message, result, ...rest } = this.state
    if (result) {
      return <ConfirmationBody
        result={result}
        productName={name}
        productPrice={price}
        productImage={image}
      />
    } else {
      return <PaymentBody
        productName={name}
        productPrice={price}
        productImage={image}
        cardInfo={rest}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClose={this.handleClose}
      />
    }
  }

  renderSteps = () => {
    const steps = [
      {
        key: 'billing',
        active: !this.state.result,
        icon: this.state.result ? null : 'payment',
        title: 'Billing',
      },
      {
        key: 'confirmation',
        active: this.state.result,
        icon: this.state.result ? 'check circle' : null,
        title: 'Confirmation',
      }
    ]

    return <Step.Group size='mini' fluid items={steps} />
  }

  render() {
    const { modalOpen, message } = this.state
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} icon labelPosition='left'>
          Buy It Now
        <Icon name='dollar' />
        </Button>}
        open={modalOpen}
        onClose={this.handleClose}
        size='tiny'
      >

        {this.renderSteps()}

        <Modal.Content scrolling>
          {this.renderModalBody()}
        </Modal.Content>

        <SlideMessage open={message !== null}>
          {this.displayError()}
        </SlideMessage>

      </Modal >
    )
  }
}
