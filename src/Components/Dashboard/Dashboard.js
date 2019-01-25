import React, { Component } from 'react';

import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.deleteProduct = this.deleteProduct.bind(this)

      }

    deleteProduct(id){
        axios
            .delete('/api/products'+id)
            .then(response =>{
                this.props.getProducts()
            })
    }

  render() {
    return (
      <div id='dashboardColumn'>
            <Product
                products={this.props.products} 
                deleteProduct = {this.deleteProduct}
                getCurrentProduct = {this.props.getCurrentProduct}
            />
      </div>
    );
  }
}

export default Dashboard;