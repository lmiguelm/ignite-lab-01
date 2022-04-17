import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import { CoursesService } from '../../http/services/courses.service';
import { EnrollmentsService } from '../../http/services/enrollments.service';
import { StudentsService } from '../../http/services/studens.service';

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
  constructor(
    private studentsService: StudentsService,
    private coursesService: CoursesService,
    private enrollmentsServices: EnrollmentsService,
  ) {}

  @EventPattern('purchases.new-purchase')
  async purchaseCreated(@Payload('value') payload: PurchaseCreatedPayload) {
    let student = await this.studentsService.getStudentByAuthId(
      payload.customer.authUserId,
    );

    if (!student) {
      student = await this.studentsService.create({
        authUserId: payload.customer.authUserId,
      });
    }

    console.log(payload);

    let course = await this.coursesService.getCourseBySlug(
      payload.product.slug,
    );

    if (!course) {
      course = await this.coursesService.createCourse({
        title: payload.product.title,
      });
    }

    await this.enrollmentsServices.create({
      courseId: course.id,
      studentId: student.id,
    });
  }
}
