import { Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../models/product';

@Resolver()
export class ProductsResolver {
  constructor(private service: ProductsService) {}

  @Query(() => [Product])
  // @UseGuards(AuthorizationGuard)
  products() {
    return this.service.listAllProducts();
  }
}
