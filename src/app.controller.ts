import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { AddProductMessage, CartQueryMessage, UpdateProductMessage } from './types/request.msg';
import { CartItemPageDTO } from './types/cart_item_page.dto';
import { CartItemDTO } from './types/cart_item.dto';
import { PurchaseProductEvent } from './types/purchase_product.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // internal API: remove product from cart
  @EventPattern('product_purchased')
  handleProductPurchased(data: PurchaseProductEvent) {
    console.log('event received - CART', 'product_purchased');
    this.appService.handleProductPurchased(data);
  }
  
  @MessagePattern({ cmd: 'get_cart_items' })
  async getCart(query: CartQueryMessage): Promise<CartItemPageDTO> {
    console.log('message received - CART', '{ cmd: `get_cart_items` }');
    return await this.appService.getCart(query);
  }

  @MessagePattern({ cmd: 'add_item_to_cart' })
  async addProductToCart(msg: AddProductMessage): Promise<CartItemDTO> {
    console.log('message received - CART', '{ cmd: `add_item_to_cart` }');
    return await this.appService.addProductToCart(msg);
  }

  @MessagePattern({ cmd: 'update_cart_item_amount' })
  async updateCartItemAmount(msg: UpdateProductMessage): Promise<Number> {
    console.log('message received - CART', '{ cmd: `update_cart_item_amount` }');
    return await this.appService.updateCartItemAmount(msg);
  }
}
