import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{ type: String, required: true,},
    description:{ type: String, required: true,},
    price:{ type: Number, required: true,},
    image:{ type: Array, required: true,},
    category:{ type: String, required: true,},
    subCategory:{ type: String, required: true,},
    sizes:{ type: Array, required: true,},
    bsetSeller:{ type: Boolean},
    date:{ type: Number, required: true,},
})

const productModel = mongoose.model.product || mongoose.model('product',productSchema) ;

export default productModel;



/*
    _id: "aaaaa",
    name: "Women Round Neck Cotton Top",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    price: 100,
    image: [p_img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    date: 1716634345448,
    bestseller: true
*/