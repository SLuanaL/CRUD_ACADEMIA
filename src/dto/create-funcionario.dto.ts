export class CreateFuncionarioDto {
  id?: number;
  nome?: string;
  cpf?: string;
  cargo?: string;
  salario?: number;
  data_admissao?: Date;
  status_funcionario?: string;
  turno?: string;
  especialidade?: string;
}
