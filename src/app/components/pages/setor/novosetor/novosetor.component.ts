import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "src/app/apiservice.service";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-novosetor',
  templateUrl: './novosetor.component.html',
  styleUrls: ['./novosetor.component.css']
})
export class NovosetorComponent implements OnInit {

  constructor(private service:ApiserviceService, private fb:FormBuilder) { 
    this.novosetor = this.fb.group({
      perfis: this.fb.array([]),
      nome:  ['', Validators.required],
      login: ['', Validators.required],
      cpf:   ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      bloqueado: this.fb.array([])
    })  }

  novosetor: FormGroup
  ngOnInit(): void {
  }

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
