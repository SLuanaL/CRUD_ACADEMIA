import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Treino } from '../entity/treino.entity';
import { CreateTreinoDto } from '../dto/create-treino.dto';
import { UpdateTreinoDto } from '../dto/update-treino.dto';

@Injectable()
export class TreinoService {
  constructor(
    @InjectRepository(Treino)
    private readonly treinoRepository: Repository<Treino>,
  ) {}

  create(createTreinoDto: CreateTreinoDto): Promise<Treino> {
    const treino = this.treinoRepository.create(createTreinoDto);
    return this.treinoRepository.save(treino);
  }

  findAll(): Promise<Treino[]> {
    return this.treinoRepository.find();
  }

  async findOne(id: number): Promise<Treino> {
    const treino = await this.treinoRepository.findOne({ where: { id } });
    if (!treino) {
      throw new NotFoundException(`Treino com id ${id} não encontrado`);
    }
    return treino;
  }

  async update(id: number, updateTreinoDto: UpdateTreinoDto): Promise<Treino> {
    const treino = await this.findOne(id);
    Object.assign(treino, updateTreinoDto);
    return this.treinoRepository.save(treino);
  }

  async remove(id: number): Promise<void> {
    const treino = await this.findOne(id);
    await this.treinoRepository.remove(treino);
  }
}
