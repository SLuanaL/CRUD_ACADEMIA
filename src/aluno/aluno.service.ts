import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Aluno } from './aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @Inject('ALUNO_REPOSITORY')
    private readonly alunoRepository: Repository<Aluno>,
  ) {}

  async findAll(): Promise<Aluno[]> {
    return this.alunoRepository.find();
  }

  async create(dados: Aluno): Promise<Aluno> {
    return this.alunoRepository.save(dados);
  }

  async update(id: number, dados: Aluno): Promise<Aluno> {
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
