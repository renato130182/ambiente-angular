import { PeopleService } from './shared/services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loopCount = 5;
  loopCounter = 0;
  count = 0;
  nome = 'Renato Ferreira Soares';
  text = '';
  upper = true;

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    },
  ];

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit() {
    this.getPeople();    
    console.log(this.pessoas);
    let interval = setInterval(() => {
      if(this.upper){
        this.count++;
      }else{
        this.count--;
      }
      
      if(this.count === 10) {        
        if(this.loopCount === this.loopCounter){
          clearInterval(interval);
        }        
        this.upper = false;
      }
      if(this.count ===0){
        this.upper = true;
        this.loopCounter ++
      }
    }, 250)
  }

  clicou(nome: string): void {
    console.log('Clicou em min', nome)
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }

}
