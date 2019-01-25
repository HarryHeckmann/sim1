import React from 'react'

import './Product.css'

export default function Product(props){
    console.log(props.products)
    const products = props.products.map((e, i) => (
        <div className='productsCard' key={i}>
           <div className='container'>
               <img id='thumbnail' src={e.image_url} className='thumbnail'/>
               <div id='info'>
               <div id='infoContainer'>
                    <h4>{e.name}</h4> 
                    <h4 id='price'>{e.price}</h4>
                </div>
                <div id='editDeleteBox'>
                    <button onClick={() => props.deleteProduct(e.id)}>Delete</button>
                    <button onClick={() => props.getCurrentProduct(e.id)}>Edit</button>
                </div>
               </div>
           </div>
        </div>    
    ))       
    return (
        <div>{products}</div>
    )
}