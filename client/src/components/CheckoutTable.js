import React from 'react'
import { Table, Header } from 'semantic-ui-react'

const CheckoutTable = props => {
  const { productName, productPrice } = props
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={15}>Item</Table.HeaderCell>
          <Table.HeaderCell width={1} textAlign='right'>Price</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{productName}</Table.Cell>
          <Table.Cell textAlign='right'>${productPrice.toFixed(2)}</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3' textAlign='right'>
            <Header as='h3'>Total: ${productPrice.toFixed(2)}</Header>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default CheckoutTable
