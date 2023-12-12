import { CartItemDTO } from "./cart_item.dto";

export class CartQueryMessage {
    user_id: string;
    page_num: number;
    page_size: number;
}

export class AddProductMessage {
    user_id: string;
    cart_item: CartItemDTO;
}

export class UpdateProductMessage {
    user_id: string;
    product_id: string;
    amount: number;
}