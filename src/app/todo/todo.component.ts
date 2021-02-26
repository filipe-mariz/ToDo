import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'ToDo';
  public tarefa = "";
  public items = ['item 1'];
  
  addTarefa() {
    this.items.push(this.tarefa)
  }

  removeTarefa(item: string) {
    this.items.splice(this.items.indexOf(item), 1)
  }


}
