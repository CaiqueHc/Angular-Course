import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component'; // import do componente Header
import { UsersComponent } from "./users/users.component";    // import do componente user

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent], // array de objetos, neste caso, estes são os objetos que será injetados
  templateUrl: './app.component.html', // template, no caso, o html que será usado no componente referenciado
  styleUrl: './app.component.css' // css que será utilizado
})

export class AppComponent {
  title = 'first-angular-app';
}
