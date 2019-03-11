import React from 'react'
import { Card, Image, Header } from 'semantic-ui-react'
import CheckoutModal from './CheckoutModal'

const Product = props => {
  const { product, live } = props
  const { name, price, image, features } = product
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header textAlign='center'>{name}</Card.Header>
        <Card.Meta>
          <ul>
            {renderFeatures(features)}
          </ul>
          <Header floated='right' as='h3'>${price}</Header>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra textAlign='center'>
        <CheckoutModal product={product} live={live} />
      </Card.Content>
    </Card>
  )
}

function renderFeatures(features) {
  return features.map(feature => {
    return <li key={feature}>{feature}</li>
  })
}

export default Product
