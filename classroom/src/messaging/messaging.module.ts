import { Module } from '@nestjs/common';

import { PurchasesController } from './controllers/purchases.controller';

import { DatabaseModule } from '../database/database.module';

import { CoursesService } from '../http/services/courses.service';
import { EnrollmentsService } from '../http/services/enrollments.service';
import { StudentsService } from '../http/services/studens.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PurchasesController],
  providers: [StudentsService, EnrollmentsService, CoursesService],
})
export class MessagingModule {}
