import {FormControl} from "@angular/forms";

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidSku: true }
  }
}

export { skuValidator }
