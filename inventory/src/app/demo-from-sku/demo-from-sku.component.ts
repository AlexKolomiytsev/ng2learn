import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms'

@Component({
  selector: 'demo-from-sku',
  templateUrl: './demo-from-sku.component.html',
  styleUrls: ['./demo-from-sku.component.css']
})
export class DemoFromSkuComponent implements OnInit {
  myForm: FormGroup
  sku: AbstractControl

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    })

    this.sku = this.myForm.controls['sku']
  }

  onSubmit(form: string): void {

    console.log('you submitted value: ', form)
  }

  ngOnInit() {
  }

}

//TODO: continue with page 144 (removing the sku instance variable)
