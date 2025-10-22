export class CreatePlanoDto {
  nome_plano: string;
  valor_plano: number;
  duracao_meses: number;
  descricao_plano?: string;
  beneficios_extras?: string;
  tipo_do_plano?: string;
  status_plano?: boolean;
}