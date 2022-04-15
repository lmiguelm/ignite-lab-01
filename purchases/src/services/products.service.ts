import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from '../database/prisma/prisma.service';

type CreateProductParams = {
  title: string;
};

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async listAllProducts() {
    return await this.prisma.product.findMany();
  }

  async createProduct(data: CreateProductParams) {
    const { title } = data;

    // validando titulo
    if (!title || title.trim().length === 0) {
      throw new Error('Título é obrigatório!');
    }

    // gerando slug
    const slug = slugify(title, {
      lower: true,
      trim: true,
    });

    if (await this.productWithSameSlug(slug)) {
      throw new Error('Produto já cadastrado');
    }

    return await this.prisma.product.create({
      data: {
        slug,
        title,
      },
    });
  }

  private async productWithSameSlug(slug: string) {
    return !!(await this.prisma.product.findUnique({
      where: {
        slug,
      },
    }));
  }
}
