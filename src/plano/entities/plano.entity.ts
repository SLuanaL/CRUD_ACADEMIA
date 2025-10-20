import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'plano' })
export class Plano {
  @PrimaryGeneratedColumn({ name: 'id_plano' })
  id_plano: number;

  @Column({ name: 'nome_plano', type: 'varchar', length: 150 })
  nome_plano: string;

  @Column({ name: 'valor_plano', type: 'decimal', precision: 10, scale: 2 })
  valor_plano: string;

  @Column({ name: 'duracao_meses', type: 'int' })
  duracao_meses: number;

  @Column({ name: 'descricao_plano', type: 'text', nullable: true })
  descricao_plano?: string;

  @Column({ name: 'beneficios_extras', type: 'text', nullable: true })
  beneficios_extras?: string; 

  @Column({ name: 'tipo_do_plano', type: 'varchar', length: 100, nullable: true })
  tipo_do_plano?: string;

  @Column({ name: 'status_plano', type: 'boolean', default: true })
  status_plano: boolean;
}
