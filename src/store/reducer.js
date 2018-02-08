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
        new Product("DSLR Camera", "99.99", "https://static.buydig.com/Assets/Product/imagesnw400/CFDB35FDD805452E9F5A3A43CA900FD8.jpg"),
        new Product("Laptop", "1999.99", "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-space-gray-201706?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1505775431709"),
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