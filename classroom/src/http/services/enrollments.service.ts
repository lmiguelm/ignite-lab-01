import { Injectable } from "@nestjs/common";

import { PrismaService } from "../../database/prisma/prisma.service";

@Injectable()
export class EnrollmentsService {
  constructor(private prisma: PrismaService){}

  async listAllEnrollmentss() {
    return await this.prisma.enrollment.findMany();
  }
}