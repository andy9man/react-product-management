import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProduct} from '../store/actions';

class ProductAdd extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            price: 0,
            image: '',
            error: undefined
        }
    }

    render(){
        console.log("Create new product...");
        return(
            <div>
                <h1>Create a New Product</h1>

                <div className="margin-top-medium margin-horiz-large">
                    <form onSubmit={
                        (e) => {
                            e.preventDefault();
                            let error = undefined;
                            this.props.handleAddProduct({title: this.state.title, price: this.state.price, image: this.state.image});
                        }
                    }>
                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <div className="md-text-field with-floating-label">
                                    <input id='title' type='text' onInput={(e) => this.setState({price: e.target.value})} required />
                                    <label htmlFor='title'>Title</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <div className="md-text-field with-floating-label">
                                    <input id='price' type='number' onInput={(e) => this.setState({price: e.target.value})} required />
                                    <label htmlFor='price'>Price</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <div className="md-text-field with-floating-label">
                                    <input id='image1' type='text' onInput={(e) => this.setState({image: e.target.value})} required />
                                    <label htmlFor='image1'>Image URL</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="small-12 medium-8 large-6 columns">
                                <button className='button btn-cta' >Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleAddProduct(product){
            dispatch(addProduct(product));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd)