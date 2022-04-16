import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { AuthorizationGuard } from "../../auth/authorization.guard";

import { StudentsService } from "../../services/studens.service";
import { Studient } from "../models/student";

@Resolver(() => Studient)
export class StudentsResolver {
  constructor(
    private studentsService: StudentsService
  ) {}

  @Query(() => [Studient])
  @UseGuards(AuthorizationGuard)
  async students() {
    return await this.studentsService.listAllStudents();
  }
}