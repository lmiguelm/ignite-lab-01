import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

type CreateCustomerParams = {
  authUserId: string;
};

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async getCustomerByAuthUserId(authUserId: string) {
    return await this.prisma.customer.findUnique({
      where: {
        authUserId,
      },
    });
  }

  async getCustomerById(id: string) {
    return await this.prisma.customer.findUnique({
      where: {
        id,
      },
    });
  }

  async createCustomer({ authUserId }: CreateCustomerParams) {
    return await this.prisma.customer.create({
      data: {
        authUserId,
      },
    });
  }
}
