import axios from 'axios';

export const API_URL = 'http://5a7c93eb4c1e2d00124a5e32.mockapi.io/api/v1/products';
export const UPDATE_VIEW = 'UPADTE_VIEW';

export const LOAD_DATA = 'LOAD_DATA_SUCCESS';

export const DATA_STATUS_HANDLER = 'DATA_STATUS_HANDLER';




export const updateView = (view) => {
  return {type: UPDATE_VIEW, payload: view}
}

export const dataResultHandler = (actionType, stateObjectType, stateObjectResult) => {
  return {
    type: actionType,
    payload: {
      type: stateObjectType,
      result: stateObjectResult
    }
  }
}

export const getProducts = () => {
  return (dispatch, getState, url) => {
    //dispatch( loadingData(true) );
    dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingData', true) );
    console.log(`Getting Product Data... ${url}`);

    axios.get(`${url}`)
      .then( ({data: products}) => {
        setTimeout( () => { dispatch( {type: LOAD_DATA, payload: products} ) }, 1);
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //  console.log(error.response.data.message);
            //  console.log(error.response.status);
            //  console.log(error.response.headers);
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in loading data...");
        console.log(error);
        dispatch( dataResultHandler(DATA_STATUS_HANDLER, 'loadingError', true) );

    })
  }
}

export const editProduct = (ProductId, ProductObj) => {
  return (dispatch, getState, url) => {
    console.log(`Updating Product... ${ProductId}`);
    console.log(ProductObj);
    axios.put(`${url}/${ProductId}`, ProductObj)
      .then( (response) => {
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'editProductSuccess', result: true}} );
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //  console.log(error.response.data.message);
            //  console.log(error.response.status);
            //  console.log(error.response.headers);
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in updating Product...");
        console.log(error);
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'editProductError', result: true}} );
    })
  }
}

export const deleteProduct = (ProductId) => {
  return (dispatch, getState, url) => {
    console.log(`Deleting Product... ${ProductId}`);
    axios.delete(`${url}/${ProductId}`)
      .then( (response) => {
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'deleteProductSuccess', result: true}} );
        //callGetProducts && dispatch( getProducts() );
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //  console.log(error.response.data.message);
            //  console.log(error.response.status);
            //  console.log(error.response.headers);
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in deleteing Product...");
        console.log(error);
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'deleteProductError', result: true}} );
    })
  }
}

export const addProduct = (ProductObj) => {
  return (dispatch, getState, url) => {
    console.log('Adding Product...');
    console.log(ProductObj);
    axios.post(url, ProductObj)
      .then( response => {
        console.log(response);
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addProductsuccess', result: true}} );
      })
      .catch( error => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            //  console.log(error.response.data.message);
            //  console.log(error.response.status);
            //  console.log(error.response.headers);
            console.log(`Error Response: ${error.response}`);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(`Error Request: ${error.request}`);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log(`General Error: ${error.message}`);
        }
        console.log("Error has occured in obtaining data...");
        console.log(error);
        dispatch( {type: DATA_STATUS_HANDLER, payload: {type: 'addProductError', result: true}} );
    })
  }
}