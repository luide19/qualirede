import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "src/app/apiservice.service";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-novotipousuario',
  templateUrl: './novotipousuario.component.html',
  styleUrls: ['./novotipousuario.component.css']
})
export class NovotipousuarioComponent implements OnInit {

  constructor(private service:ApiserviceService, private fb:FormBuilder) { 
    this.usernovotipousuario = this.fb.group({
      tipodeusuario: ['', Validators.required],
      bloqueado: this.fb.array([])
    })
  }

  ngOnInit(): void {
  }

  usernovotipousuario:FormGroup

}
