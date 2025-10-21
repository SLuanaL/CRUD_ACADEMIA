import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Funcionario } from './funcionario.entity';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
  ) {}

  create(createFuncionarioDto: CreateFuncionarioDto): Promise<Funcionario> {
    const funcionario = this.funcionarioRepository.create(createFuncionarioDto);
    return this.funcionarioRepository.save(funcionario);
  }

  findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  async findOne(id: number): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.findOne({ where: { id } });
    if (!funcionario) {
      throw new NotFoundException(`Funcionário com id ${id} não encontrado`);
    }
    return funcionario;
  }

  async update(id: number, updateFuncionarioDto: UpdateFuncionarioDto): Promise<Funcionario> {
    const funcionario = await this.findOne(id);
    Object.assign(funcionario, updateFuncionarioDto);
    return this.funcionarioRepository.save(funcionario);
  }

  async remove(id: number): Promise<void> {
    const funcionario = await this.findOne(id);
    await this.funcionarioRepository.remove(funcionario);
  }
}
