import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styles: []
})
export class SideBarComponent implements OnInit {

  constructor( public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
