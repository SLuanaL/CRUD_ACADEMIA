import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plano } from './entities/plano.entity';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { UpdatePlanoDto } from './dto/update-plano.dto';

@Injectable()
export class PlanoService {
  constructor(
    @InjectRepository(Plano)
    private readonly planoRepo: Repository<Plano>,
  ) {}

  async create(dto: CreatePlanoDto) {
  
    const toSave = this.planoRepo.create({
      ...dto,
      valor_plano: dto.valor_plano != null ? String(dto.valor_plano) : undefined,
    });
    return this.planoRepo.save(toSave);
  }

  findAll() {
    return this.planoRepo.find();
  }

  async findOne(id: number) {
    const plano = await this.planoRepo.findOneBy({ id_plano: id });
    if (!plano) throw new NotFoundException('Plano não encontrado');
    return plano;
  }

  async update(id: number, dto: UpdatePlanoDto) {
    const plano = await this.findOne(id);
    const updated = Object.assign(plano, {
      ...dto,
      valor_plano: dto.valor_plano != null ? String(dto.valor_plano) : plano.valor_plano,
    });
    return this.planoRepo.save(updated);
  }

  async remove(id: number) {
    const res = await this.planoRepo.delete({ id_plano: id });
    if (res.affected === 0) throw new NotFoundException('Plano não encontrado');
    return { deleted: true };
  }
}
