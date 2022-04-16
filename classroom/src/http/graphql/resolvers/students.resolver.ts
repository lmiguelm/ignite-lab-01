import { Query, Resolver } from "@nestjs/graphql";

import { StudentsService } from "../../services/studens.service";
import { Studient } from "../models/student";

@Resolver(() => Studient)
export class StudentsResolver {
  constructor(
    private studentsService: StudentsService
  ) {}

  @Query(() => [Studient])
  async students() {
    return await this.studentsService.listAllStudents();
  }
}