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
    this.items.push(this.tarefa)
    
  }

  removeTarefa(item: string) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  limparimput(){
    let btnClear = document.querySelector('button');
    let input = document.querySelectorAll('input');

    btnClear?.addEventListener('click', () => {
      input.forEach(input => input.value = '')
    })

  }


}
