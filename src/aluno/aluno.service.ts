import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from './aluno.entity';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Injectable()
export class AlunoService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private readonly alunoRepository: Repository<Aluno>,
  ) {}

  async findAll(): Promise<Aluno[]> {
    return this.alunoRepository.find();
  }

  async create(dados: CreateAlunoDto): Promise<Aluno> {
    const aluno = this.alunoRepository.create(dados);
    return this.alunoRepository.save(aluno);
  }

  async update(id: number, dados: UpdateAlunoDto): Promise<Aluno> {
    await this.alunoRepository.update(id, dados);
    const aluno = await this.alunoRepository.findOneBy({ id });
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
    return aluno;
  }

  async remove(id: number): Promise<void> {
    const resultado = await this.alunoRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Aluno com ID ${id} não encontrado`);
    }
  }
}
