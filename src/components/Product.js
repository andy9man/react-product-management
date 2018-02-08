import React from 'react'
import {Link} from 'react-router-dom'

const Product = props => {
    const {item} = props
    return (
        <div className='small-12 medium-6 large-4 columns card'>
            <img src={item.image}/>
            <h3>{item.title}</h3>
            <div>${item.price}</div>
            <Link to={`/products/edit/${item.id}`}><button>Edit</button></Link>
            <button>Delete</button> 
        </div>


    )
}



export default Product;