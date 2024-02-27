import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mrmiss'
})
export class MrmissPipe implements PipeTransform {

  transform(name: string,gender:string): string {
    let prefix = ''

    if(gender.toLowerCase() === 'male'  ){
        prefix = 'Mr'
    }else{
      prefix = 'Miss'
    }
    return prefix;
  }

}
