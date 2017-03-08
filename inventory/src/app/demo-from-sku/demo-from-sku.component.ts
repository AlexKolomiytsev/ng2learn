import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, AbstractControl, Validators} from '@angular/forms'
import {skuValidator} from '../validators/sku.validator'

@Component({
  selector: 'demo-from-sku',
  templateUrl: './demo-from-sku.component.html',
  styleUrls: ['./demo-from-sku.component.css']
})
export class DemoFromSkuComponent implements OnInit {
  myForm: FormGroup
  sku: AbstractControl
  productName: string

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.compose([
        Validators.required, skuValidator
      ])],
      'productName': ['', Validators.required]
    })

    this.sku = this.myForm.controls['sku']

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value)
      }
    )

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to: ', form)
      }
    )
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value)
  }

  ngOnInit() {
  }

}
