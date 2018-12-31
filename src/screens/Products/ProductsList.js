import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from './actions'

class ProductsList extends Component {
  render () {
    const { products, loading } = this.props
    return <div>
      <h2>Products</h2>
      {loading
        ? 'Loading products..'
        : <ul>
        {products.map(
          (product, i) => <li key={i}>{product.name}</li>
        )}
      </ul>
      }
    </div>
  }

  componentDidMount () {
    this.props.fetchProducts()
  }
}

const mapStateToProps = state => ({
  products: state.products.list,
  loading: state.products.loading
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(Actions.fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)
