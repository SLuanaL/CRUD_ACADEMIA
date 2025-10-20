import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plano } from './entities/plano.entity';
import { PlanoService } from './plano.service';
import { PlanoController } from './plano.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Plano])],
  controllers: [PlanoController],
  providers: [PlanoService],
})
export class PlanoModule {}
