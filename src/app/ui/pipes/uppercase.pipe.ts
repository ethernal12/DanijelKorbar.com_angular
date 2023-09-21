import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uuppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
