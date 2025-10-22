import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  // GET /aluno → lista todos os alunos
  @Get()
  findAll() {
    return this.alunoService.findAll();
  }

  // POST /aluno → cria um novo aluno
  @Post()
  create(@Body() dados: CreateAlunoDto) {
    return this.alunoService.create(dados);
  }

  // PUT /aluno/:id → atualiza um aluno existente
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dados: UpdateAlunoDto) {
    return this.alunoService.update(id, dados);
  }

  // DELETE /aluno/:id → remove um aluno
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.alunoService.remove(id);
  }
}
