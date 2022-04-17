import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import path from 'node:path';

import { DatabaseModule } from '../database/database.module';
import { MessagingModule } from '../messaging/messaging.module';

import { CustomersService } from '../services/customers.service';
import { ProductsService } from '../services/products.service';
import { PurchasesService } from '../services/purchases.service';

import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { CustomerResolver } from './graphql/resolvers/customer.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
    MessagingModule,
  ],
  providers: [
    // resolvers
    ProductsResolver,
    PurchasesResolver,
    CustomerResolver,

    // services
    ProductsService,
    PurchasesService,
    CustomersService,
  ],
})
export class HttpModule {}
