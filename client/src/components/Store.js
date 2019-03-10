import React from 'react'
import { Container } from 'semantic-ui-react'
import Product from './Product'
import local from '../apis/local'

export default class Store extends React.Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    const response = await local.get(`/products`)
    this.setState({ products: response.data })
  }

  renderProducts = () => {
    return this.state.products.map(product => {
      return <Product product={product} live={this.props.live} key={product.name} />
    })
  }

  render() {
    return (
      <div>
        <Container>
          {this.renderProducts()}
        </Container>
      </div>
    )
  }
}
