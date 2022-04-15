import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from '../../../services/products.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { CreateProductInput } from '../inputs/create-product-input';
import { Product } from '../models/product';

@Resolver()
export class ProductsResolver {
  constructor(private service: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.service.listAllProducts();
  }

  @Mutation(() => Product)
  @UseGuards(AuthorizationGuard)
  createProduct(@Args('data') data: CreateProductInput) {
    console.log('oakos');
    return this.service.createProduct(data);
  }
}
