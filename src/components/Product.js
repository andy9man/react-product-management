import React from 'react'

const Product = props => {
    const {item} = props
    return (
        <div className='small-12 medium-6 large-4 columns card'>
            <img src={item.image}/>
            <h3>{item.title}</h3>
            <div>${item.price}</div>
            <button>Edit</button>
            <button>Delete</button> 
        </div>
    )
}

export default Product;