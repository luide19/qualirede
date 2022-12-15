import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "src/app/apiservice.service";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-novoperfilusuario',
  templateUrl: './novoperfilusuario.component.html',
  styleUrls: ['./novoperfilusuario.component.css']
})
export class NovoperfilusuarioComponent implements OnInit {

  constructor(private service:ApiserviceService, private fb:FormBuilder) { 
    this.novoperfilusuario = this.fb.group({
      perfis: this.fb.array([]),
      perfildeusuario:  ['', Validators.required],
      liente: ['', Validators.required],
      colaborador:   ['', Validators.required],
      prestador: ['', Validators.required]
    })
  }

  novoperfilusuario: FormGroup
  ngOnInit(): void {
  }


  //checkboxes dos perfis
  Cadastro: Array<any> = [
    {name: 'Analista de Cadastro', value: 'Cadastro - Analista de Cadastro'},
    {name: 'Administrador',  value: 'Cadastro - Administrador'},
    {name: 'Consulta cadastro online', value: 'Cadastro - Consulta cadastro online'},
    {name: 'Consulta', value: 'Cadastro - Consulta'},
    {name: 'Gestor', value: 'Cadastro - Gestor'},
  ]

  AuditoriaConcorrente: Array<any> = [
    {name: 'Criador', value: 'Auditoria Concorrente- Criador'},
    {name: 'Administrador', value: 'Auditoria Concorrente - Administrador'},
    {name: 'Prestador', value: 'Auditoria Concorrente - Prestador'}
  ]

  Pagamento: Array<any> = [
    {name: 'Validação de Glosas', value: 'Pagamento - Validação de Glosas'},
    {name: 'Pagamento', value: 'Pagamento - Pagamento'},
    {name: 'Aprovação', value: 'Pagamento - Aprovação'},
    {name: 'Contas Médicas', value: 'Pagamento - Contas Médicas'},
    {name: 'Protocolo', value: 'Pagamento - Protocolo'},
    {name: 'Mestre', value: 'Pagamento - Mestre'},
    {name: 'Administrador', value: 'Pagamento - Administrador'},
    {name: 'Consultar Pagamento', value: 'Pagamento - Consultar Pagamento'}
  ]

  RelatorioBI: Array<any> = [
    {name: 'Usuário', value: 'Relatórios BI - Criador'},
    {name: 'Administrador', value: 'Relatórios BI - Administrador'}
  ]

  Credenciamento: Array<any> = [
    {name: 'Administrador', value: 'Credenciamento - Criador'},
    {name: 'Operadora', value: 'Credenciamento  - Administrador'},
    {name: 'Prestador', value: 'Credenciamento  - Prestador'}
  ]

  AIS: Array<any> = [
    {name: 'Agendador', value: 'AIS - Agendador'},
    {name: 'Beneficiário', value: 'AIS - Beneficiário'},
    {name: 'Supervisor', value: 'AIS - Supervisor'},
    {name: 'Administrador', value: 'AIS - Administrador'},
    {name: 'Atendente', value: 'AIS - Atendente'},
    {name: 'Atendente - Liberar Atendimentos', value: 'AIS - Atendente - Liberar Atendimentos'}
  ]

  Core: Array<any> = [
    {name: 'Administrador', value: 'Core - Administrador'}
  ]

  Relacionamento: Array<any> = [
    {name: 'Administrador', value: 'Relacionamento - Administrador'},
    {name: 'Atendente', value: 'Relacionamento - Atendente'},
    {name: 'Backoffice', value: 'Relacionamento - Backoffice'},
    {name: 'Gestor da Área de Negócios', value: 'Relacionamento - Gestor da Área de Negócios'}
  ]

  Relatorios: Array<any> = [
    {name: 'Criador', value: 'Relatórios - Criador'},
    {name: 'Visualizador', value: 'Relatórios - Visualizador'}
  ]

  Cobranca: Array<any> = [
    {name: 'Administrador', value: 'Cobrança - Administrador'},
    {name: 'Gestor', value: 'Cobrança - Gestor'}
  ]

  Setup: Array<any> = [
    {name: 'Administrador', value: 'Setup - Administrador'},
    {name: 'Usuário', value: 'Setup - Usuário'},
    {name: 'SSO Usuário', value: 'Setup - Usuário'}
  ]

  AnaliseDeContas: Array<any> = [
    {name: 'Auditor', value: 'Análise de Contas - Auditor'},
    {name: 'Operadora', value: 'Análise de Contas - Operadora'},
    {name: 'Administrador', value: 'Análise de Contas - Administrador'},
    {name: 'Prestador', value: 'Análise de Contas - Prestador'},
    {name: 'Visualização', value: 'Análise de Contas - Visualização'},
    {name: 'Analista', value: 'Análise de Contas - Analista'},
    {name: 'Gestor', value: 'Análise de Contas - Gestor'}
  ]

  Autorizacao: Array<any> = [
    {name: 'Biometria', value: 'Autorização - Biometria'},
    {name: 'Consulta', value: 'Autorização - Consulta'},
    {name: 'Cadastro de Prestador', value: 'Autorização - Cadastro de Prestador'},
    {name: 'Médico', value: 'Autorização - Médico'},
    {name: 'Gestor', value: 'Autorização - Gestor'},
    {name: 'Gestão da Autorização', value: 'Autorização - Gestão da Autorização'},
    {name: 'Auditor', value: 'Autorização - Auditor'},
    {name: 'Solicitante', value: 'Autorização - Solicitante'},
    {name: 'Administrador', value: 'Autorização - Administrador'},
    {name: 'Intercorrência', value: 'Autorização - Intercorrência'},
    {name: 'Analista', value: 'Autorização - Analista'}
  ]

  Atendimento: Array<any> = [
    {name: 'Agendamento', value: 'Atendimento - Agendamento'},
    {name: 'Médico Solicitante', value: 'Atendimento - Médico Solicitante'},
    {name: 'Prestador', value: 'Atendimento - Prestador'},
    {name: 'Criador', value: 'Atendimento - Administrador'},
    {name: 'Leitura de Biometria', value: 'Atendimento - Leitura de Biometria'},
    {name: 'Execução de Guias', value: 'Atendimento - Execução de Guias'}
  ]

  EditorDeRegras: Array<any> = [
    {name: 'Desenvolvedor', value: 'Editor de Regras - Desenvolvedor'},
    {name: 'Analista', value: 'Editor de Regras - Analista'},
    {name: 'Gerente', value: 'Editor de Regras - Gerente'},
    {name: 'Administrador', value: 'Editor de Regras - Administrador'}
  ]

  Faturamento: Array<any> = [
    {name: 'Administrador', value: 'Faturamento - Administrador'},
    {name: 'Consig', value: 'Faturamento - Consig'}
  ]

  Funcao: Array<any> = [
    {name: "", value:""},
    {name:"Cadastro", value: 'Cadastro'},
    {name:"Auditoria Concorrente", value:"Auditoria Concorrente"},
    {name:"Pagamento", value:"Pagamento"},
    {name:"Relatorios BI", value:"Relatorios BI"},
    {name:"Credenciamento", value:"Credenciamento"},
    {name:"AIS", value:"AIS"},
    {name:"Core", value:"Core"},
    {name:"Relacionamento", value:"Relacionamento"},
    {name:"Relatorios", value:"Relatorios"},
    {name:"Cobranca", value:"Cobranca"},
    {name:"Setup", value:"Setup"},
    {name:"Analise De Contas", value:"Analise De Contas"},
    {name:"Autorização", value:"Autorização"},
    {name:"Atendimento", value:"Atendimento"},
    {name:"Editor De Regras", value:"Editor De Regras"},
    {name:"Faturamento", value:"Faturamento"}
  ]
    //select 
    option: Array<any> = [
      {name: "", value:""},
      {name:"Cadastro", value: 'Cadastro'},
      {name:"Auditoria Concorrente", value:"Auditoria Concorrente"},
      {name:"Pagamento", value:"Pagamento"},
      {name:"Relatorios BI", value:"Relatorios BI"},
      {name:"Credenciamento", value:"Credenciamento"},
      {name:"AIS", value:"AIS"},
      {name:"Core", value:"Core"},
      {name:"Relacionamento", value:"Relacionamento"},
      {name:"Relatorios", value:"Relatorios"},
      {name:"Cobranca", value:"Cobranca"},
      {name:"Setup", value:"Setup"},
      {name:"Analise De Contas", value:"Analise De Contas"},
      {name:"Autorização", value:"Autorização"},
      {name:"Atendimento", value:"Atendimento"},
      {name:"Editor De Regras", value:"Editor De Regras"},
      {name:"Faturamento", value:"Faturamento"}
    ]
}
