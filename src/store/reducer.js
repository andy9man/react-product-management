import { LOAD_DATA } from './actions'

const CreateUid = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 15);
 };

class Product {
<<<<<<< HEAD
    constructor(title, price, image, id) {
=======
    constructor(title, price, image) {
        this.id = CreateUid();
>>>>>>> 57b40ce326a5c1302ded6215ddb2eb33751ace23
        this.title = title;
        this.price = price;
        this.image = image;
        this.id = id;
    }
}
const initialState = {
    products: [
<<<<<<< HEAD
        // new Product("DSLR Camera", "99.99", "", "1"),
        // new Product("Laptop", "1999.99", "", "2"),
=======
        new Product("DSLR Camera", "99.99", "https://static.buydig.com/Assets/Product/imagesnw400/CFDB35FDD805452E9F5A3A43CA900FD8.jpg"),
        new Product("Laptop", "1999.99", "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-space-gray-201706?wid=452&hei=420&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1505775431709"),
>>>>>>> 57b40ce326a5c1302ded6215ddb2eb33751ace23
    ]
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
        default:
            return state
    }

}