import { Component, OnInit } from "@angular/core"
import { ApiserviceService } from "src/app/apiservice.service";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipousuario',
  templateUrl: './tipousuario.component.html',
  styleUrls: ['./tipousuario.component.css']
})
export class TipousuarioComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private service:ApiserviceService, private fb:FormBuilder) { 
    this.userTIPOUSUARIOForm = this.fb.group({
      tipoDeUsuario: this.fb.array([]),
    })
  }

  userTIPOUSUARIOForm:FormGroup

  TipoDeUsuario: Array<any> = [
    {name: "", value:""},
    {name: 'Cliente', value: 'Cliente'},
    {name: 'Colaborador', value: 'Colaborador'},
    {name: 'Prestador', value: 'Prestador'}
  ]

}
