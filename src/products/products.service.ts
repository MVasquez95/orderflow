import { Inject, Injectable } from '@nestjs/common';
import { PRISMA_DB } from '../prisma/prisma.provider.js';
import { db } from '../prisma/db.js';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRISMA_DB)
    private readonly database: typeof db,
  ) {}

  async findAll() {
    return await this.database.orm.public.Product.all();
  }
}