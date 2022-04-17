import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloDriver,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';

import path from 'node:path';

import { DatabaseModule } from '../database/database.module';

import { StudentsResolver } from './graphql/resolvers/students.resolver';
import { EnrollmentsResolver } from './graphql/resolvers/enrollments.resolver';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';

import { StudentsService } from './services/studens.service';
import { EnrollmentsService } from './services/enrollments.service';
import { CoursesService } from './services/courses.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    // resolvers
    StudentsResolver,
    EnrollmentsResolver,
    CoursesResolver,

    // services
    StudentsService,
    EnrollmentsService,
    CoursesService,
  ],
})
export class HttpModule {}
