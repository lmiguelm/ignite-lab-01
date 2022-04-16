import { UseGuards } from "@nestjs/common";
import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { AuthorizationGuard } from "../../auth/authorization.guard";

import { EnrollmentsService } from "../../services/enrollments.service";
import { StudentsService } from "../../services/studens.service";

import { Student } from "../models/student";

@Resolver(() => Student)
export class StudentsResolver {
  constructor(
    private studentsService: StudentsService,
    private enrollmentsService: EnrollmentsService,
  ) {}

  @Query(() => [Student])
  @UseGuards(AuthorizationGuard)
  async students() {
    return await this.studentsService.listAllStudents();
  }

  @ResolveField()
  async enrollments(@Parent() student: Student) {
    return await this.enrollmentsService.listAllEnrollmentsByStudent(student.id);
  }
}