import type { Provider } from '@nestjs/common';
import { db } from './db.js';

export const PRISMA_DB = Symbol('PRISMA_DB');

export const prismaProvider: Provider = {
  provide: PRISMA_DB,
  useValue: db,
};