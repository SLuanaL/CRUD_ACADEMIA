import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreinoService } from './treino.service';
import { TreinoController } from './treino.controller';
import { Treino } from '../entity/treino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Treino])],
  controllers: [TreinoController],
  providers: [TreinoService],
})
export class TreinoModule {}
