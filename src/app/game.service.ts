import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  Player1Name: string | null  =  "שחקן א" ; 
  Player2Name: string | null = "שחקן ב";
  Player1Color:string | null=  "rgb(80, 198, 245)";
  Player2Color:string | null=  " rgb(248, 131, 131)";


  constructor() { }
}
