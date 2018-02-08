import React, {Component} from 'react';
import {connect} from 'react-redux';

class ProductAdd extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            price: 0,
            imageUrl: ''
        }
    } 
    
    render(){

        return(
            <div>
                <h1>Create a New Propduct</h1>
                <input id='title' type='text' onInput={(e) => this.setState({price: e.target.value})} />
                <label htmlFor='title'>Title</label>
                <input id='price' type='number' onInput={(e) => this.setState({price: e.target.value})}/>
                <label htmlFor='price'>Price</label>
                <input id='imageUrl' type='text' onInput={(e) => this.setState({imageUrl: e.target.value})}/>
                <label htmlFor='imageUrl'>Image URL</label>
                <button className='button btn-cta' >Create</button>
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
            // dispatch(addProduct)(product)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd)