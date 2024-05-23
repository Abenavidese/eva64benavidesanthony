import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todoapps } from '../../domain/todoapps';
import { FormsModule } from '@angular/forms';
import { TodosservicesService } from '../../services/todosservices.service';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  
todoapps: Todoapps = new Todoapps()
  

  todoactivity: any


  constructor(private todoservices: TodosservicesService){}

  ngOnInit(){
    this.todoservices.getTodos().then(data => {

      this.todoactivity = data.docs.map((doc:any) => {
        console.log(doc.id)
        console.log(doc.data())
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      
      console.log('msgs', this.todoactivity)
    })
  }


  guardar(){

    this.todoservices.addTodos(this.todoapps)
    this.todoservices.add(this.todoactivity)
    this.ngOnInit()
   
  }

  limpiar(){
    this.todoservices.clear()
    this.ngOnInit()
  }
}
