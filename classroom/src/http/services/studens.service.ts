import { Injectable } from "@nestjs/common";

import { PrismaService } from "../../database/prisma/prisma.service";

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService){}

  async listAllStudents() {
    return await this.prisma.student.findMany();
  }

  async getStudentById(StudentId: string) {
    return await this.prisma.student.findUnique({
      where: {
        id: StudentId
      }
    });
  }
}