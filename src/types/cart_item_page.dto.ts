import { CartItemDTO } from './cart_item.dto';

export class CartItemPageDTO {
    page_num: number;
    page_size: number;
    items: Array<CartItemDTO>;
    total: number;
}