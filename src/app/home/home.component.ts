import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute,   private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  OpenPlay(){
    alert("start!")
    this.router.navigate(['/GameBoard'], { relativeTo: this.route });
  }
}
