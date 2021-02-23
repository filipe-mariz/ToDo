import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  public tarefa = "";
  public items = ['item 1', 'item 2', 'item 3', 'item 4'];
  addTarefa() {
    this.items.push(this.tarefa)
  }
  removeTarefa(item: string) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}
