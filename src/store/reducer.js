import { LOAD_DATA, DATA_STATUS_HANDLER } from './actions'

// const CreateUid = () => {
//     // Math.random should be unique because of its seeding algorithm.
//     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//     // after the decimal.
//     return Math.random().toString(36).substr(2, 15);
//  };

// class Product {
//     constructor(title, price, image, id) {
//         this.title = title;
//         this.price = price;
//         this.image = image;
//         this.id = id;
//     }
// }

const initialState = {
    products: [

        // new Product("DSLR Camera", "99.99", "", "1"),
        // new Product("Laptop", "1999.99", "", "2"),
    ],
deleteProductsuccess: false
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_DATA:
            // const products = action.payload.result.map(product => new Product(product));
            return {
                ...state,
                products: action.payload,
                loadingData: false
            };
        case DATA_STATUS_HANDLER:
            return { ...state, [action.payload.type]: action.payload.result, displayAlert: action.payload.result};

            default:
            return state

    }


}
