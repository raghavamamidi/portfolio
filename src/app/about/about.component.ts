import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }
  title: string = "Welcome, I am Raghava Mamidi  ";
  paragraph: string = "I hold a B.Tech in Electrical and Electronics Engineering from the National Institute of Technology."
  ngOnInit() {}

}
