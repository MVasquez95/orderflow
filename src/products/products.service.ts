import { Inject, Injectable } from '@nestjs/common';
import { PRISMA_DB } from '../prisma/prisma.provider.js';
import { db } from '../prisma/db.js';
import { CreateProductDto } from './dto/create-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRISMA_DB)
    private readonly database: typeof db,
  ) {}

  async findAll() {
    return await this.database.orm.public.Product.all();
  }

  async create(dto: CreateProductDto) {
    return await this.database.orm.public.Product.create({
      sku: dto.sku,
      name: dto.name,
      description: dto.description,
      price: dto.price.toString(),
    });
  }
}