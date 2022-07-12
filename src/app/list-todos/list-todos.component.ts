import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[] | undefined

  message: string
    // = [
    //   new Todo(1, 'Learn to Dance', false, new Date()),
    //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
    //   new Todo(3, 'Visit India', false, new Date()),
    //   // {id : 1, description : },
    //   // {id : 2, description : },
    //   // {id : 3, description : 'Visit India'}
    // ]
    // todo = {
    //   id: 1,
    //   description: 'Learn to Dance',
    // }
    | undefined
  // = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date()),
  //   // {id : 1, description : },
  //   // {id : 2, description : },
  //   // {id : 3, description : 'Visit India'}
  // ]
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance',
  // }

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('centralcoastbarbell').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: any) {
    console.log(`delete todo #${id}`)
    this.todoService.deleteTodo('centralcoastbarbell', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ID #${id} is Successful!`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id: any) {
    console.log(`update todo #${id}`)
    this.router.navigate(['todos', id]);

  }
  addTodo(){
    this.router.navigate(['todos', -1])
  }
}
