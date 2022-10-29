import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@learn-nx/data';

@Component({
  selector: 'learn-nx-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  ngOnInit() {}
}
