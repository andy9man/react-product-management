import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getProducts } from '../store/actions';

class ProductList extends Component {

    componentDidMount(){
        console.log("Attempting to load users...");
        this.props.appGetProducts();
    }

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