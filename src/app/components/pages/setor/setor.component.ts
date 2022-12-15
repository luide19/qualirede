import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "src/app/apiservice.service";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  constructor(private service:ApiserviceService, private fb:FormBuilder) { 
    this.userSetor = this.fb.group({
      setor:  ['', Validators.required],
      bloqueado: this.fb.array([])
    })

  }

  userSetor: FormGroup
  ngOnInit(): void {
  }

}
