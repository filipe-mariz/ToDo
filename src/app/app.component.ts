import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  public tarefa = "";
  public items = [''];
  
  addTarefa() {
    if(this.tarefa == "" || this.tarefa == null){
      window.alert('Cadastre uma nova tarefa antes de adicionar...')
    }else{
      this.items.push(this.tarefa)
    }
    
  }

  alterarTarefa(item: string) {
    this.items.splice(this.items.indexOf(item), 1)
    if(this.tarefa == "" || this.tarefa == null){
      window.alert('Escreva uma nova tarefa antes de alterar...')
      
    }
    
    if(this.tarefa != "" || this.tarefa != null) {
      this.items.push(this.tarefa)
    }  
    
  }

  removeTarefa(item: string) {
    this.items.splice(this.items.indexOf(item), 1)
  }
}
