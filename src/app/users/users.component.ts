import {
  Component,
  EventEmitter,
  Input,
  Output,
} from /*,computed ,input ,signal*/ '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { type User } from './user.model';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-users',
  standalone: true,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})

/* ============================================================================|
 * OBS.: sempre que for utilizado 'signals', não se deve esquecer              *
 * que no template, é necessário realizar alterações. Ou seja,                 *
 * não é possível utilizar o 'selectedUser' diretamente, é necessário          *
 * utilizar 'selectedUser()' para acessar o valor. Como se fosse uma função.   *
 * O mesmo vale para a variavel imagePath, pois como se trata de um signal,    *
 * fica implicito que é uma função.                                            *
 *=============================================================================*/
// export class UsersComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

//   // para 'signals' não é necessário getters e setters
//   /*get imagePath() {
//     return 'assets/users/' + this.selectedUser.avatar;
//   }*/

//   //event que previamente irá ser executado no template (html)
//   /*onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[randomIndex];
//   }*/

//   //event que previamente irá ser executado no template (html)
//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }
export class UsersComponent {
  // notation: Aqui estou definindo que a variavel ira receber o valor de uma classe pai, no caso, lá de app.component.ts
  // @Input({ required: true }) avatar!: string;
  // required true, força a atribuição do valor dentro do template, pois caso nao haja o required, poderá haver quebra no template
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) id!: string;
  @Input({ required: true }) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  /**Este é um metodo de usar signal também, porém não o mais usado por ser mais novo*/
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
