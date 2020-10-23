import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-hints',
  templateUrl: './hints.page.html',
  styleUrls: ['./hints.page.scss'],
})
export class HintsPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
