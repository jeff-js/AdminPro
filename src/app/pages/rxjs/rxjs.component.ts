import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    

    this.regresaObservable().pipe(
      retry(2)
    )
    .subscribe(data => {
      console.log(data);
    }, err => console.error(err), () => console.log('Termine...'));

  }

  ngOnInit() {
  }

  regresaObservable(): Observable<number> {
    return new Observable(observer => {

      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);
        if ( contador === 3 ) {
          clearInterval(intervalo);
          observer.complete();
        }

        if ( contador === 2 ) {
          //clearInterval(intervalo);
          observer.error('Se genero un error');
        }

       }, 1000);

    });
  }

}
