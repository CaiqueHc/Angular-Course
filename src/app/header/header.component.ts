import { Component } from "@angular/core";

@Component({
    selector: 'app-header', // tag que vai ser usada no html
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {} // com isso, permito que seja importado em outra parte do projeto