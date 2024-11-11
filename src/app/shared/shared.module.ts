import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


const components = [
  HeaderComponent,
  SidebarComponent
];

const modules = [
  CommonModule,
  RouterModule
];

@NgModule({
  declarations: [
    ...components,
    
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [
  ]
})
export class SharedModule { }
