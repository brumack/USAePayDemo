import React from 'react'
import { Container } from 'semantic-ui-react'
import Product from './Product'
import local from '../apis/local'

export default class Store extends React.Component {

  state = {
    products: [],
    live: null
  }

  componentDidMount() {
    this.setState({ live: this.props.live })
    this.getProducts()
  }

  componentWillReceiveProps = newProps => {
    const { live } = this.state
    if (live !== newProps.live) {
      this.setState({ live: newProps.live })
    }
  }

  getProducts = async () => {
    const response = await local.get(`/products`)
    this.setState({ products: response.data })
  }

  renderProducts = () => {
    const { products, live } = this.state
    return products.map(product => <Product product={product} live={live} key={product.name} />)
  }

  render() {
    return (
      <Container>
        {this.renderProducts()}
      </Container>
    )
  }
}
