import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { MaterialModule } from './material.module';
import { DialogGetStartComponent } from './dialog-get-start/dialog-get-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameBoardComponent,
    DialogGetStartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,    
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
