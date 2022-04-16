import { UseGuards } from "@nestjs/common";
import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";

import { AuthorizationGuard } from "../../auth/authorization.guard";

import { EnrollmentsService } from "../../services/enrollments.service";
import { CoursesService } from "../../services/courses.service";
import { StudentsService } from "../../services/studens.service";

import { Enrollment } from "../models/enrollment";

@Resolver(() => Enrollment)
export class EnrollmentsResolver {
  constructor(
    private enrollmentsService: EnrollmentsService,
    private studentsService: StudentsService,
    private coursesService: CoursesService,
  ) {}

  @Query(() => [Enrollment])
  @UseGuards(AuthorizationGuard)
  async enrollments() {
    return await this.enrollmentsService.listAllEnrollments();
  }

  @ResolveField()
  async student(@Parent() enrollment: Enrollment) {
    return await this.studentsService.getStudentById(enrollment.studentId);
  }

  @ResolveField()
  async course(@Parent() enrollment: Enrollment) {
    return await this.coursesService.getCourseById(enrollment.courseId);
  }
}