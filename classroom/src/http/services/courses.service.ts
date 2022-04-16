import { Injectable } from "@nestjs/common";
import slugify from 'slugify';

import { PrismaService } from "../../database/prisma/prisma.service";

type CreateCourseParams = {
  title: string;
}

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService){}

  async listAllCourses() {
    return await this.prisma.course.findMany();
  }

  async getCourseById(courseId: string) {
    return await this.prisma.course.findUnique({
      where: {
        id: courseId
      }
    });
  }

  async createCourse({ title }: CreateCourseParams) {

    const slug = slugify(title, {
      lower: true,
      trim: true
    });

    if(await this.checkIfCoursesExists(slug)) {
      throw new Error('Curso já cadastrado!')
    }

    return await this.prisma.course.create({
      data: {
        title,
        slug
      }
    });
  }

  private async checkIfCoursesExists(slug: string) {
    return !!(await this.prisma.course.findUnique({ where: { slug } }));
  }
}