import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogGetStartComponent } from '../dialog-get-start/dialog-get-start.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( public dialog: MatDialog,  private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  OpenPlay(){
    this.dialog.open(DialogGetStartComponent);
  }
}
