import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Course } from "./course";
import { Studient } from "./student";

@ObjectType()
export class Enrollment {

  @Field(() => ID)
  id: string;

  @Field(() => Studient)
  student: Studient
  
  studentId: string;

  @Field(() => Course)
  course: Course;

  courseId: string;

  @Field(() => Date, { nullable: true })
  canceledAt: Date;

  @Field(() => Date)
  createdAt: Date;
}