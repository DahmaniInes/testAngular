import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterT',
  standalone: true

})
export class FilterTitlePipe implements PipeTransform {

  
  transform(value: any[], ch:string): any[] {
    if (ch == '') return value;
    return value.filter((e)=>e.title.toLowerCase() == ch.toLowerCase())

  }
}
