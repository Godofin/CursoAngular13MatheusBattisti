import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'joaquim@email.com',
    bornData: '02/08/2000'
  }

  title = 'CursoAngular';
}
