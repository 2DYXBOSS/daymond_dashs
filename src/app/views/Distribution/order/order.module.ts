import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CallListComponent } from './call-list/call-list.component';
import { SharedModule } from "src/app/shared/shared.module";
import { CordListComponent } from './cord-list/cord-list.component';
import { CordDetailComponent } from './cord-detail/cord-detail.component';
const routes: Routes = [
  {
    path: "",
    component: CallListComponent,
  },
  {
    path: "list_call",
    component: CallListComponent,
  },
  {
    path: "list_cord",
    component: CordListComponent,
  },
  {
    path: "details_coord",
    component: CordDetailComponent,
  },
];

@NgModule({
  declarations: [
    CallListComponent,
    CordListComponent,
    CordDetailComponent
  ],
  imports: [
    CommonModule , SharedModule, RouterModule.forChild(routes)
  ]
})
export class OrderModule { }
