import { Injectable } from '@nestjs/common';
import { db as mongodb } from './utils/db';
import { AddProductMessage, CartQueryMessage, UpdateProductMessage } from './types/request.msg';
import { CartItemPageDTO } from './types/cart_item_page.dto'
import { CartItemDTO } from './types/cart_item.dto';
import { PurchaseProductEvent } from './types/purchase_product.event';

@Injectable()
// TODO
export class AppService {
  
  async getCart(query: CartQueryMessage): Promise<CartItemPageDTO> {
    console.log('getCart - CART', JSON.stringify(query));
    let total = 0;
    let cartItems: Array<CartItemDTO> = [];
    const conn = await mongodb.connect();
    const skipAggregation = {
      $skip: (Number(query.page_num) -1) * (Number(query.page_size))
    };
    throw new Error('Method not implemented.');
  }
  
  async addProductToCart(msg: AddProductMessage): Promise<CartItemDTO> {
    throw new Error('Method not implemented.');
  }
  
  
  async updateCartItemAmount(msg: UpdateProductMessage): Promise<Number> {
    throw new Error('Method not implemented.');
  }
  
  handleProductPurchased(data: PurchaseProductEvent) {
    throw new Error('Method not implemented.');
  }

}
