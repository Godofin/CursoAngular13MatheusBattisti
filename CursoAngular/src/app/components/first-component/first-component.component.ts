import { Component, OnInit } from '@angular/core';

type NewType = string;

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Guilherme"
  age: number = 30
  workJob: string = "Programmer"
  hobbies = ['running', 'play games', 'study']

  constructor() { }

  ngOnInit(): void {
  }

}
