import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller.js';
import { ProductsService } from './products.service.js';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should return the product list', () => {
    expect(controller.findAll()).toEqual([
      {
        sku: 'LAPTOP-001',
        name: 'Laptop Lenovo',
        price: 2500,
      },
    ]);
  });
});