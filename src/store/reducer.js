//import { ADD_COIN, SELL_COIN, MINE_COIN } from './actions'


class Product {
    constructor(title, price, image) {
        this.title = title;
        this.price = price;
        this.image = image;
    }
}
const initialState = {
    products: [
        new Product("DSLR Camera", "99.99", ""),
        new Product("Laptop", "1999.99", ""),
    ]
}

const CreateUid = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 15);
 };

export const reducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return state
    }

}