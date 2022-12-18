import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { JoinRoomComponent } from './join-room/join-room.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'room/:roomId', component: RoomComponent },
  { path: 'joinroom/:roomId', component: JoinRoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
