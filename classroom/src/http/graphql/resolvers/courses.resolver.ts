import { Query, Resolver } from "@nestjs/graphql";

import { CoursesService } from "../../services/courses.service";

import { Course } from "../models/course";

@Resolver(() => Course)
export class CoursesResolver {
  constructor(
    private coursesService: CoursesService
  ) {}

  @Query(() => [Course])
  async courses() {
    return await this.coursesService.listAllCourses();
  }
}