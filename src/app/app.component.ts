import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component'; // import do componente Header
import { UsersComponent } from './users/users.component'; // import do componente user
import { TasksComponent } from './tasks/tasks.component'; // import do componente tasks
import { DUMMY_USERS } from './dummy-users';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent, TasksComponent], // array de objetos, neste caso, estes são os objetos que será injetados
  templateUrl: './app.component.html', // template, no caso, o html que será usado no componente referenciado
  styleUrl: './app.component.css', // css que será utilizado
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((users) => users.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
