import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prommises',
  templateUrl: './prommises.component.html',
  styles: []
})
export class PrommisesComponent implements OnInit {

  constructor() {
    this.contarTres().then(msg => console.log('termino', msg))
    .catch(error => console.error(error) );

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return  new Promise((resolve, reject) => {
      let count = 0;
      const interval = setInterval(() => {
        count += 1;
        console.log(count);
        if ( count === 3 ) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }

}
