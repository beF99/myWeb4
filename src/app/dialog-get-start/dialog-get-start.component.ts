import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../game.service';


@Component({
  selector: 'app-dialog-get-start',
  templateUrl: './dialog-get-start.component.html',
  styleUrls: ['./dialog-get-start.component.scss']
})
export class DialogGetStartComponent implements OnInit {

  name: string | null =" ";

  GemeForm= this._fb.group({
    Player1Name:  ['' , Validators.required],
    Player2Name:  ['' , Validators.required],
    Player1Color:  ['' , Validators.required],
    Player2Color : ['' , Validators.required],
  })
  



  constructor( public dialogRef: MatDialogRef<DialogGetStartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private router:Router, private route: ActivatedRoute,
    public gameService: GameService,
    private _fb: FormBuilder, ) { }

  ngOnInit(): void {
  }


GetStarted(){
  this.gameService.Player1Name = this.GemeForm.controls.Player1Name.value;
this.gameService.Player2Name = this.GemeForm.controls.Player2Name.value;
// this.gameService.Player1Color = this.GemeForm.controls.Player1Color.value;
// this.gameService.Player2Color = this.GemeForm.controls.Player2Color.value;

this.dialogRef.close();

  this.router.navigate(['/GameBoard'], { relativeTo: this.route } );
}


}
