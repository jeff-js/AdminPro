import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menuItems: any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      subItems: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Promesas', url: '/promises' },
        { title: 'RxJs', url: '/rxjs' },
        { title: 'Graficas', url: '/graficas1' },
      ]
    }
  ];


  constructor() { }
}
