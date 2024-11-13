
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CreateAnnouncementsComponent } from './create-announcements/create-announcements.component';
import { ListAnnouncementsComponent } from './list-announcements/list-announcements.component';
import { SharedModule } from "src/app/shared/shared.module";
import { ActualityComponent } from '../actuality/actuality.component';
import { CreateActualityComponent } from './create-actuality/create-actuality.component';


const routes: Routes = [
  {
    path: "",
    component: ListAnnouncementsComponent,
  },
  {
    path: "actualite",
    component: ActualityComponent,
  },
  {
    path: "create-annonce",
    component: CreateAnnouncementsComponent,
  },
  {
    path: "list-annonces",
    component: ListAnnouncementsComponent,
  },
  
];
@NgModule({
  declarations: [
    CreateAnnouncementsComponent,
    ListAnnouncementsComponent,
    ActualityComponent,
    CreateActualityComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule.forChild(routes)
  ]
})
export class AnnouncementsModule { }
