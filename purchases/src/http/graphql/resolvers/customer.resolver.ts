import { UseGuards } from '@nestjs/common';

import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { CustomersService } from '../../../services/customers.service';
import { PurchasesService } from '../../../services/purchases.service';

import { AuthorizationGuard } from '../../auth/authorization.guard';

import { AuthUser, CurrentUser } from '../../auth/current-user';

import { Customer } from '../models/customer';
import { Purchase } from '../models/purchase';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(
    private customersService: CustomersService,
    private purchaseService: PurchasesService,
  ) {}

  @Query(() => Customer)
  @UseGuards(AuthorizationGuard)
  async me(@CurrentUser() user: AuthUser) {
    return await this.customersService.getCustomerByAuthUserId(user.sub);
  }

  @ResolveField()
  async purchases(@Parent() customer: Customer) {
    return await this.purchaseService.listAllFromCustomer(customer.id);
  }
}
