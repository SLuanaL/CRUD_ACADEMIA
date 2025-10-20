import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('treino')
export class Treino {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  objetivo: string;

  @Column({ nullable: true })
  data_inicio: Date;

  @Column({ nullable: true })
  data_fim: Date;

  @Column({ nullable: true })
  divisao: string;

  @Column({ nullable: true })
  frequencia: string;

  @Column({ nullable: true })
  nivel: string;
}
