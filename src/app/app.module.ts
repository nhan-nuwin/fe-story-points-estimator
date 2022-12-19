import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardsComponent } from './cards/cards.component';
import { PlayersComponent } from './players/players.component';

import { PokerService } from 'src/services/poker-service';
import { JoinRoomComponent } from './join-room/join-room.component';

const config: SocketIoConfig = {
  url: 'https://monkfish-app-nhagx.ondigitalocean.app/',
  options: {},
};

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomePageComponent,
    CardsComponent,
    PlayersComponent,
    JoinRoomComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule,
  ],
  providers: [PokerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
