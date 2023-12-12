import { Schema } from "mongoose";

export const CartSchema = new Schema({
    user_id: String,
    cart_items: [
        {
            amount: Number,
            product: {
                name: String,
                thumbnail_image: String,
                catalog: String,
                published_date: Date,
                price: Number,
                stock_quantity: Number
            }
        }
    ]
}, { collection: "cart" })
