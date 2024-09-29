import mongoose from "mongoose";

const productModal = new mongoose.Schema({
    name:String,
    price:String,
    color:String,
    category:String,
   
});

// console.log(productModal)
export const Product = mongoose.models.products || mongoose.model("products",productModal)