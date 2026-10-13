import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service.js';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should return the product list', () => {
    expect(service.findAll()).toEqual([
      {
        sku: 'LAPTOP-001',
        name: 'Laptop Lenovo',
        price: 2500,
      },
    ]);
  });
});