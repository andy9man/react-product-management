import React from 'react';
import { connect } from 'react-redux'


const ProductList = props => {
    const {products} = props;
    const haveProducts = products.length > 0;
    return (
        <div>
            <h1>Product List</h1>

            {
                haveProducts ?
                    products.map( product => (
                        <li>
                            {product.title}
                        </li>
                    ))
                :
                    <h3>There are no products to display</h3>

            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

export default connect(mapStateToProps)(ProductList)