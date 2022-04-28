import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'Renato',
        lastName: 'Ferreira Soares',
        age: 40
      },
      {
        firstName: 'Vitor',
        lastName: 'Sousa Soares',
        age: 9
      },
      {
        firstName: 'Joana',
        lastName: 'D´arc Sousa Ferreira',
        age: 5
      },
      {
        firstName: 'Dayana',
        lastName: 'Sousa Rosa',
        age: 34
      },      
      {
        firstName: 'Joana',
        lastName: 'D´arc Ferreira',
        age: 65
      },
    ]

    return of(peopleArray)
  }
}
