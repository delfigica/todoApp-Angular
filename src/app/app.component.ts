import { Component } from '@angular/core';
import 'animate.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoArray: any = [];

  addTodo(value: any) {
    this.todoArray.push(value);

  }

  deleteItem(todo: any) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
      }
    }
  }

  todoSubmit(value: any) {
    if (value !== '') {
      console.log(value);
      this.todoArray.push(value.value);
    } else {
      alert('Field required **');
    }
  }
}
