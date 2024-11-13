
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { DetailUserComponent } from './detail-user/detail-user.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
  },
  {
    path: "detail",
    component: DetailUserComponent,
  },
  {
    path: "list-users",
    component: UserComponent,
  },
  
];

@NgModule({
  declarations: [
    DetailUserComponent,
    UserComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class UsersModule { }

