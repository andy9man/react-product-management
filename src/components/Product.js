import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProduct} from '../store/actions';

const Product = props => {
    const {item} = props
    return (
        <div className='small-12 medium-5 large-3 columns card'>
            <img src={item.image} alt={item.title} className="product-image"/>
            <h3>{item.title}</h3>
            <div>${item.price}</div>
            <ul class="button-group btn-cta tiny">
                <li><Link to={`/products/edit/${item.id}`}><button>Edit</button></Link></li>
                <li><button className="alert" onClick={() => {
                    props.handleDeleteProduct(item.id);
                }}>Delete</button></li>
            </ul>
        </div>


    )
}



const mapStateToProps = state => {
    return{
    }
}

const mapDispatchToProps = dispatch => {
    return{
        handleDeleteProduct(id) {
            dispatch(deleteProduct(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)