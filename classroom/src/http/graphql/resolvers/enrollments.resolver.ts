import { Query, Resolver } from "@nestjs/graphql";

import { EnrollmentsService } from "../../services/enrollments.service";

import { Enrollment } from "../models/enrollment";

@Resolver(() => Enrollment)
export class EnrollmentsResolver {
  constructor(
    private enrollmentsService: EnrollmentsService
  ) {}

  @Query(() => [Enrollment])
  async enrollments() {
    return await this.enrollmentsService.listAllEnrollmentss();
  }
}