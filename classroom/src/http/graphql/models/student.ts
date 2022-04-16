import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Enrollment } from "./enrollment";

@ObjectType()
export class Studient {

  @Field(() => ID)
  id: string;

  @Field(() => [Enrollment])
  enrollments: Enrollment[];
}