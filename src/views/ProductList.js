import React, { Component } from 'react';
import { connect } from 'react-redux'
<<<<<<< HEAD
import { getProducts } from '../store/actions';
=======
import Product from '../components/Product'
>>>>>>> 57b40ce326a5c1302ded6215ddb2eb33751ace23

class ProductList extends Component {

    componentDidMount(){
        console.log("Attempting to load users...");
        this.props.appGetProducts();
    }

<<<<<<< HEAD
    render() {
        console.log(this.props.products)
        const haveProducts = this.props.products.length > 0;
        return (
            <div>
                <h1>Product List</h1>
                {haveProducts ?
                    this.props.products.map((product, idx) => (
                        <li key={idx}>{product.title}</li>
                    )) :
=======
            {
                haveProducts ?
                    products.map( product => (
                        <Product item={product} />
                    ))
                :
>>>>>>> 57b40ce326a5c1302ded6215ddb2eb33751ace23
                    <h3>There are no products to display</h3>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}

const getDispatchFromReduxToAppComponentAsProps = (dispatch) => {
    return {
        appGetProducts() {
            dispatch(getProducts());
        },
    }
}

export default connect(mapStateToProps, getDispatchFromReduxToAppComponentAsProps)(ProductList)