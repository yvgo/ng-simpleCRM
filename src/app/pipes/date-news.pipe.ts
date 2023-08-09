import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateNews'
})
export class DateNewsPipe implements PipeTransform {

  // Pipe wird aktuell nicht genutzt

  transform(array: {birthDate: number}[]): {birthDate: number}[] {
    /* return null; */

    return array.sort(function(a,b){ 
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return (new Date(b.birthDate) as any) - (new Date(a.birthDate) as any);
    });
    
  }

  

}
