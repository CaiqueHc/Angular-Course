import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-tasks', // tag que vai ser usada no html
    standalone: true,
    imports: [],
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

export class TaskComponent {
    @Input({ required: true }) name!: string;
    @Output() selectedName = new EventEmitter<string>();

}