import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GameService } from '../game.service';

import { Idiskit } from './Idiskit';
import { Iplayer } from './Iplayer';
// import {swal} from 'sweetalert';


@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {


  player1: Iplayer = {
    namePlayer: this.gameService.Player1Name,
    colorPlayer: this.gameService.Player1Color,
    set: 0
  }

  player2: Iplayer = {
    namePlayer: this.gameService.Player2Name,
    colorPlayer:this.gameService.Player2Color,
    set: 0
  }
  NoPlayer: Iplayer = {
    namePlayer: " | ",
    colorPlayer: "rgb(255, 255, 255)",
    set: 0
  }
  set_c: number = 0;
  set_r: number = 0;
  set_up_d: number = 0;
  set_down_d: number = 0;


  playerNow: Iplayer = this.NoPlayer;

  begining = "rgb(255, 255, 255)";

  colorButtom: string | null = "";
  disAbleClickInsert: boolean = false;
  disAbleClickP1: boolean = true;
  disAbleClickP2: boolean = false;


  diskis: Idiskit[][] = [
    [{ id: "A1", color: this.begining }, { id: "A2", color: this.begining }, { id: "A3:", color: this.begining }, { id: "A4", color: this.begining }, { id: "A5", color: this.begining }, { id: "A6", color: this.begining }],//0
    [{ id: "B1", color: this.begining }, { id: "B2", color: this.begining }, { id: "B3:", color: this.begining }, { id: "B4", color: this.begining }, { id: "B5", color: this.begining }, { id: "B6", color: this.begining }],//1
    [{ id: "C1", color: this.begining }, { id: "C2", color: this.begining }, { id: "C3:", color: this.begining }, { id: "C4", color: this.begining }, { id: "C5", color: this.begining }, { id: "C6", color: this.begining }],//2
    [{ id: "D1", color: this.begining }, { id: "D2", color: this.begining }, { id: "D3:", color: this.begining }, { id: "D4", color: this.begining }, { id: "D5", color: this.begining }, { id: "D6", color: this.begining }],//3
    [{ id: "E1", color: this.begining }, { id: "E2", color: this.begining }, { id: "E3:", color: this.begining }, { id: "E4", color: this.begining }, { id: "E5", color: this.begining }, { id: "E6", color: this.begining }],//4
    [{ id: "F1", color: this.begining }, { id: "F2", color: this.begining }, { id: "F3:", color: this.begining }, { id: "F4", color: this.begining }, { id: "F5", color: this.begining }, { id: "F6", color: this.begining }],//5
    [{ id: "G1", color: this.begining }, { id: "G2", color: this.begining }, { id: "G3:", color: this.begining }, { id: "G4", color: this.begining }, { id: "G5", color: this.begining }, { id: "G6", color: this.begining }],//6
    [{ id: "H1", color: this.begining }, { id: "H2", color: this.begining }, { id: "H3:", color: this.begining }, { id: "H4", color: this.begining }, { id: "H5", color: this.begining }, { id: "H6", color: this.begining }],//7
    [{ id: "I1", color: this.begining }, { id: "I2", color: this.begining }, { id: "I3:", color: this.begining }, { id: "I4", color: this.begining }, { id: "I5", color: this.begining }, { id: "I6", color: this.begining }]//8

  ]

  diskisBasic: number[][] = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 2, 1, 1, 1],
  ]
  currentStyles: Record<string, string> = {};

  constructor(private router: Router, private route: ActivatedRoute,
    public gameService: GameService) { }

  ngOnInit(): void {
  }

  SetCurrentStyles(hh:string |null){
    this.currentStyles = {
    'background-color': hh? hh:"red"
  }
}


  Start(player: Iplayer) {
    this.playerNow = player;
    this.disAbleClickInsert = true;
    this.colorButtom = this.playerNow.colorPlayer;


  }
  Insert( num: number) {

    this.disAbleClickInsert = false;


    //הכנסת הדיסקית ללוח
    for (let index = 0; index < this.diskis[num].length; index++) {
      if (this.diskis[num][index].color === this.begining) {
        this.diskis[num][index].color = this.colorButtom;
        break;
      }
    }




    ///החלפת התור לשחקן השני
    if (this.playerNow == this.player1) {
      this.playerNow = this.player2;
      this.winner(this.player1);
    }
    else if (this.playerNow == this.player2) {
      this.playerNow = this.player1;
      this.winner(this.player2);

    }
    this.colorButtom = this.playerNow.colorPlayer;

  }

  winner(player: Iplayer) {
    debugger;
    //בדיקה האם יש שחקן שניצח
    for (let i = 0; i < 9; i++) {

      for (let j = 0; j < 9; j++) {
        // בדיקת טורים

        if (j < 6 && (this.diskis[i][j].color == player.colorPlayer && (j == 0 ||
          (j > 0 && this.diskis[i][j - 1].color == player.colorPlayer) ||
          (j < 5 && this.diskis[i][j + 1].color == player.colorPlayer)
        ))) {
          this.set_c++;
        }
        else {
          this.set_c = 0;
        }
        //  בדיקת שורות
        if (i < 6 && (this.diskis[j][i].color == player.colorPlayer && (j == 0 ||

          (j > 0 && this.diskis[j - 1][i].color == player.colorPlayer) ||
          (j < 8 && this.diskis[j + 1][i].color == player.colorPlayer)
        ))) {
          this.set_r++;
        }
        else {
          this.set_r = 0;
        }
        //עולה בדיקת אלכסון 
        if (j < 3 && i < 6 && (this.diskis[i][j].color == player.colorPlayer // ?האם החוליה שאנו עומדים עליה בצבע הנוכחי 
          && (this.diskis[i + 1][j + 1].color == player.colorPlayer) // ?וגם החוליה שמעליה באלכסון באותו הצבע?
          && (this.diskis[i + 2][j + 2].color == player.colorPlayer) // ?וגם החוליה שמעליה באלכסון באותו הצבע? 

          && (this.diskis[i + 3][j + 3].color == player.colorPlayer) // ?וגם החוליה שמעליה באלכסון באותו הצבע? 

        )) {
          this.set_up_d++;
        }
        else {
          this.set_up_d = 0;

        }
        //יורד בדיקת אלכסון 
        if (j > 2 && j < 6 && i < 6 && (this.diskis[i][j].color == player.colorPlayer // ?האם החוליה שאנו עומדים עליה בצבע הנוכחי 
          && (this.diskis[i + 1][j - 1].color == player.colorPlayer) // ?וגם החוליה שמעליה באלכסון באותו הצבע?
          && (this.diskis[i + 2][j - 2].color == player.colorPlayer) // ?וגם החוליה שמעליה באלכסון באותו הצבע? 

          && (this.diskis[i + 3][j - 3].color == player.colorPlayer) // ?וגם החוליה שמעליה באלכסון באותו הצבע? 

        )) {
          this.set_down_d++;
        }
        else {
          this.set_down_d = 0;

        }


        if (this.set_c == 4 || this.set_r == 4 || this.set_up_d == 1 || this.set_down_d == 1) {
          player.set = 1;



          setTimeout(() => {

            Swal.fire({
              icon: 'success',
              title: player.namePlayer + " ניצחה! כל הכבוד! ",
              showConfirmButton: false,
              timer: 2500
            })

          }, 100);

          setTimeout(() => {
            // window.location.reload();
            this.router.navigate(['/HomeComponent'], { relativeTo: this.route } );

          }, 1600);


        }

      }



    }
    if (this.disAbleClickP1 == true) {
      this.disAbleClickP1 = false
      this.disAbleClickP2 = true
    }
    else {
      this.disAbleClickP2 = false
      this.disAbleClickP1 = true
    }
  }

}



