import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service.js';
import { PRISMA_DB } from '../prisma/prisma.provider.js';

describe('ProductsService', () => {
  let service: ProductsService;

  const productsMock = [
    {
      sku: 'LAPTOP-001',
      name: 'Laptop Lenovo',
      price: 2500,
    },
  ];

  const databaseMock = {
    orm: {
      public: {
        Product: {
          all: jest.fn(),
        },
      },
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    databaseMock.orm.public.Product.all.mockResolvedValue(productsMock);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: PRISMA_DB,
          useValue: databaseMock,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should return products from PostgreSQL', async () => {
    const result = await service.findAll();

    expect(result).toEqual(productsMock);
    expect(databaseMock.orm.public.Product.all).toHaveBeenCalledTimes(1);
  });
});