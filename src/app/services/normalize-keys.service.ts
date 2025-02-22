import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class NormalizeKeysService {
  constructor() {}
  normalize(obj: FormGroup) {
    const formValues = obj.getRawValue();
    console.log(formValues);
  }
}
