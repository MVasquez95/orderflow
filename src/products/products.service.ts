import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  findAll() {
    return [
      {
        sku: 'LAPTOP-001',
        name: 'Laptop Lenovo',
        price: 2500,
      },
    ];
  }
}