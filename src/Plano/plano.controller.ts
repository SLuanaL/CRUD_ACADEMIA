import { Controller, Get, Post, Body, Param, Delete, Put, Patch, ParseIntPipe } from '@nestjs/common';
import { PlanoService } from './plano.service';
import { CreatePlanoDto } from './dto/create-plano.dto';
import { UpdatePlanoDto } from './dto/update-plano.dto';

@Controller('planos')
export class PlanoController {
  constructor(private readonly planoService: PlanoService) {}

  @Post()
  create(@Body() createDto: CreatePlanoDto) {
    return this.planoService.create(createDto);
  }

  @Get()
  findAll() {
    return this.planoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.planoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdatePlanoDto) {
    return this.planoService.update(id, updateDto);
  }

  
  @Patch(':id')
  partialUpdate(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdatePlanoDto) {
    return this.planoService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.planoService.remove(id);
  }
}