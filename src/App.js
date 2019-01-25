import React, { Component } from 'react';
import axios from 'axios'
import routes from './routes'
import {Link, Switch} from 'react-router-dom'

import './App.css';

import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

class App extends Component {
  constructor(){
    super()
    this.state = {
      products: [],
      currentProduct: {}
    }
    this.getProducts = this.getProducts.bind(this)
    this.getCurrentProduct = this.getCurrentProduct.bind(this)

  }
  getCurrentProduct(id){
    this.setState({currentProduct: this.state.products[id-1]})
    console.log(this.state.currentProduct)
  }

  getProducts(){
    axios
      .get('/api/products')
      .then(response =>{
        this.setState({products: response.data})
      })
  }

  componentDidMount(){
    this.getProducts()
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className='main'>
          {/* {routes} */}
          <Dashboard
            products = {this.state.products}
            getProducts = {this.getProducts}
            getCurrentProduct = {this.getCurrentProduct}
          />
          <Form
            products = {this.state.products}
            onSubmit = {this.onSubmit}
            getProducts = {this.getProducts}
            currentProduct = {this.state.currentProduct}
          />
        </div>
      </div>
    );
  }
}

export default App;
