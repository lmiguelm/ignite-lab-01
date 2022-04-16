import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { AuthorizationGuard } from "../../auth/authorization.guard";

import { CoursesService } from "../../services/courses.service";
import { CreateCourseInput } from "../inputs/create-course-input";

import { Course } from "../models/course";

@Resolver(() => Course)
export class CoursesResolver {
  constructor(
    private coursesService: CoursesService
  ) {}

  @Query(() => [Course])
  @UseGuards(AuthorizationGuard)
  async courses() {
    return await this.coursesService.listAllCourses();
  }

  @Mutation(() => Course)
  @UseGuards(AuthorizationGuard)
  async createCourse(@Args('data') data: CreateCourseInput) {
    return this.coursesService.createCourse(data);
  }
}