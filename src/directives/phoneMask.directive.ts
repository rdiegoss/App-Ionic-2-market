import { Directive, Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[phone-mask]',
  host: {
    '(ngModelChange)': 'onInputChange($event)',
    '(keydown.backspace)':'onInputChange($event.target.value, true)'
  }
})

export class phoneMaskDirective {

  @Output() rawChange:EventEmitter<string> = new EventEmitter<string>();

  constructor(public model: NgControl) {}

  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, '');
    let rawValue = newVal;

    newVal = this.mask(newVal);

    this.model.valueAccessor.writeValue(newVal);
    this.rawChange.emit(rawValue);

  }

  mask(value) {
    if (value.length <= 2) {
      value = value.replace(/^(\d{0,2})/, '($1');
    } else if (value.length <= 6) {
      value = value.replace(/^(\d{0,2})(.*)/, '($1) $2');
    } else if (value.length <= 10) {
      value = value.replace(/^(\d{0,2})(\d{0,4})(.*)/, '($1) $2-$3');
    } else {
      value = value.replace(/^(\d{0,2})(\d{0,5})(.*)/, '($1) $2-$3');
    }

    return value;
  }
}
