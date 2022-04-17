import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma/prisma.service';

type CreateStudentParams = {
  authUserId: string;
};

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async listAllStudents() {
    return await this.prisma.student.findMany();
  }

  async getStudentById(StudentId: string) {
    return await this.prisma.student.findUnique({
      where: {
        id: StudentId,
      },
    });
  }

  async getStudentByAuthId(authUserId: string) {
    return await this.prisma.student.findUnique({
      where: {
        authUserId,
      },
    });
  }

  async create({ authUserId }: CreateStudentParams) {
    return await this.prisma.student.create({
      data: {
        authUserId,
      },
    });
  }
}
