import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  public tarefa = "";
  public items = ['item 1'];
  
  addTarefa() {
    this.items.push(this.tarefa)
  }

  alterarTarefa(item: string) {
    this.items.splice(this.items.indexOf(item), 1)
    this.items.push(this.tarefa)

  }

  removeTarefa(item: string) {
    this.items.splice(this.items.indexOf(item), 1)
  }


}
