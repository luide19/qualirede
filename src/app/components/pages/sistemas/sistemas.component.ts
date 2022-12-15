import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "src/app/apiservice.service";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sistemas',
  templateUrl: './sistemas.component.html',
  styleUrls: ['./sistemas.component.css']
})
export class SistemasComponent implements OnInit {

  constructor( private service:ApiserviceService, private fb:FormBuilder) {
    this.userSistemas = this.fb.group({
      setor: this.fb.array([])
    })
  }

  //
  readData:any
  fetchPosts(): void {
    this.service.getAllData().subscribe((res)=>{
      this.readData = res.data
    })
  }
  //
  
  userSistemas: FormGroup
  ngOnInit(): void {
    this.fetchPosts()
  }

  selecionado: string = ''
  selecionar(event:any){
    this.selecionado = event.target.value
    console.log(this.selecionado)
  }

  sistemasSubmit(){
    if(this.userSistemas.valid){
      console.log(this.userSistemas.value)
      this.service.getSistema().subscribe((res)=>{
        console.log(res,'res==>')
      })
    }
    console.log(this.userSistemas.value)
  }

  Setor: Array<any> = [
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
