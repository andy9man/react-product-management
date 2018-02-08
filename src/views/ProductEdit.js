import React, { Component } from 'react';
import {connect} from 'react-redux'

class ProductEdit extends Component {
    constructor (props){
        super (props)
        const {id}=this.props.match.params
        
        this.state = this.props.products.find(item => item.id === id )

    }
    render(){
        console.log(this.props)
        return <div>
            <h1>Edit Product</h1>
            <input id="title" type="text" value={this.state.title} className={this.state.error && "has-error"} onInput={e => this.setState(
                  { title: e.target.value }
                )} />
            <label htmlFor="title">Title</label>

            <input id="price" type="text" value={this.state.price} className={this.state.error && "has-error"} onInput={e => this.setState(
                  { price: e.target.value }
                )} />
            <label htmlFor="price">Price</label>
            <input id="image" type="text" value={this.state.image} className={this.state.error && "has-error"} onInput={e => this.setState(
                  { image: e.target.value }
                )} />
            <label htmlFor="image">Image</label>
            <button className='button btn-cta alert'>Delete</button>
            <button className='button btn-cta' >Update</button>
            
          </div>;
    }
    
}
 
const mapStateToProps = state => {
    return{
        products: state.products
    }
} 
 export default connect(mapStateToProps)(ProductEdit)