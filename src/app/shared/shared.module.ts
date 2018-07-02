import { NgModule } from '@angular/core';
import { NoPageFoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SideBarComponent,
        BreadCrumbsComponent,
        NoPageFoundComponent
    ],
    exports: [
        HeaderComponent,
        SideBarComponent,
        BreadCrumbsComponent,
        NoPageFoundComponent
    ]
})


export class SharedModule { }
