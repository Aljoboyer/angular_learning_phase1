import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from './../todo-main/TodoData';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {
  title = ''
  desc = ''
  id: number | string = ''
  active: boolean | string = ''

  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() JustConsoleLog: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo: Todo = {
      id: this.id,
      title: this.title,
      desc: this.desc,
      active: this.active
    }
    this.addTodo.emit(todo)
    this.title = ''
    this.desc = ''
    this.id = 0
    this.active = ''
  }

  ConsoleClick(){
    this.JustConsoleLog.emit('Hello')
  }
}
