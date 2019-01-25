import React, { Component } from 'react';
import axios from 'axios'

import './Form.css'

class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            editImage: '',
            editName: '',
            editPrice: '',
            editProduct: null

        }
    }

    onSubmit(i, n, p, event){
        event.preventDefault()
        let newValues ={
            image_url: i,
            name: n,
            price: p
        }
        axios
            .post('/api/products', {newValues})
            .then(response => {
                this.props.getProducts()
                this.setState({editProduct: null})
            })           
    }
    submitEdit(i, n, p, event, id){
        event.preventDefault()
        let newValues ={
            image_url: i,
            name: n,
            price: p
        }
        if(i === ''){
            newValues.image_url = this.state.editProduct.image_url
        }
        if(n === ''){
            newValues.name = this.state.editProduct.name
        }
        if(p === ''){
            newValues.price = this.state.editProduct.price
        }
        axios
            .put('/api/products'+id, {newValues})
            .then(response => {
                this.props.getProducts()
                this.setState({editProduct: null})
            })         
    }

    onChange(e) {
        const name = e.target.name
        this.setState({[name]: e.target.value})
    }

    componentDidUpdate(prevProps){
        if(this.props.currentProduct !== prevProps.currentProduct){
            this.setState({editProduct: this.props.currentProduct})
        } 

    }

  render() {
      if(this.state.editProduct === null){
        return (
            <form id='form'>
              <img/>
              <div id='inputsBox'>
                  <p>Image URL:</p>
                  <input className='input' name='editImage' onChange={(e) => this.onChange(e)}></input>
                  <p>Product Name:</p>
                  <input className='input' name='editName' onChange={(e) => this.onChange(e)}></input>
                  <p>Price :</p>
                  <input className='input' name='editPrice' onChange={(e) => this.onChange(e)}></input>
              </div>
              
              <div id='button-box'>
                  <input type="reset" value="Reset"/>
                  
                  <input type="submit" onClick={(e) => this.onSubmit(this.state.editImage, this.state.editName, this.state.editPrice, e)}/>
              </div>
            </form>
          );
      }
      else {
          return (
            <form id='form'>
            <img/>
            <div id='inputsBox'>
                <p></p>
                <textarea className='input' name='editImage' onChange={(e) => this.onChange(e)} >{this.state.editProduct.image_url}</textarea>
                <p>Product Name:</p>
                <textarea className='input' name='editName' onChange={(e) => this.onChange(e)} >{this.state.editProduct.name}</textarea>
                <p>Price :</p>
                <textarea className='input' name='editPrice' onChange={(e) => this.onChange(e)}>{this.state.editProduct.price}</textarea>
            </div>
            
            <div id='button-box'>
                <input type="reset" value="Reset"/>
                
                <input type="submit" value='Save Changes' onClick={(e) => this.submitEdit(this.state.editImage, this.state.editName, this.state.editPrice, e, this.state.editProduct.id)}/>
            </div>
          </form>
          )
      }
    
  }
}

export default Form;