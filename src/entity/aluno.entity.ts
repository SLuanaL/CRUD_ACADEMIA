import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('alunos')
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_aluno: string;

  @Column()
  cpf_aluno: string;

  @Column({ type: 'date' })
  data_de_nascimento: string;

  @Column()
  status: string;

  @Column()
  endereco_aluno: string;
}
