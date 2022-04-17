import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

export type Customer = {
  authUserId: string;
};

export type Product = {
  id: string;
  title: string;
  slug: string;
};

export type PurchaseCreatedPayload = {
  customer: Customer;
  product: Product;
};

@Controller()
export class PurchasesController {
  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload('value') payload: PurchaseCreatedPayload) {
    console.log(payload);
  }
}
