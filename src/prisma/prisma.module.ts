import { Module } from '@nestjs/common';
import { prismaProvider, PRISMA_DB } from './prisma.provider.js';

@Module({
  providers: [prismaProvider],
  exports: [PRISMA_DB],
})
export class PrismaModule {}