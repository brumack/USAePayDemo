import React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'
import CheckoutModal from './CheckoutModal'

export default class Product extends React.Component {

  renderFeatures = () => {
    const features = this.props.product.features
    return features.map(feature => {
      return <li key={feature}>{feature}</li>
    })
  }

  render() {
    const { name, price, image } = this.props.product
    return (
      <Card>
        <Image src={image} />
        <Card.Content>
          <Card.Header textAlign='center'>{name}</Card.Header>
          <Card.Meta>
            <ul>
              {this.renderFeatures()}
            </ul>
            <Header floated='right' as='h3'>${price}</Header>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra textAlign='center'>
          <CheckoutModal product={this.props.product} live={this.props.live} />
        </Card.Content>
      </Card>
    )
  }
}
