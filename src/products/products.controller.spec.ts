import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller.js';
import { ProductsService } from './products.service.js';

describe('ProductsController', () => {
  let controller: ProductsController;

  const productsServiceMock = {
    findAll: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    productsServiceMock.findAll.mockResolvedValue([]);

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: productsServiceMock,
        },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should return products from the service', async () => {
    const result = await controller.findAll();

    expect(result).toEqual([]);
    expect(productsServiceMock.findAll).toHaveBeenCalledTimes(1);
  });

  it('should delegate product creation to the service', async () => {
    const dto = {
      sku: 'MONITOR-002',
      name: 'Monitor Samsung',
      price: 799.9,
    };

    const createdProduct = {
      id: 'test-uuid',
      ...dto,
    };

    productsServiceMock.create.mockResolvedValue(createdProduct);
    const result = await controller.create(dto);
    expect(result).toEqual(createdProduct);
    expect(productsServiceMock.create).toHaveBeenCalledWith(dto);
  });
});
