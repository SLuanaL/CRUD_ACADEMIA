import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('funcionario')
export class Funcionario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true, length: 14 })
  cpf: string;

  @Column({ nullable: true })
  cargo: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  salario: number;

  @Column({ type: 'date', nullable: true })
  data_admissao: Date;

  @Column({ nullable: true })
  status_funcionario: string;

  @Column({ nullable: true })
  turno: string;

  @Column({ nullable: true })
  especialidade: string;
  }