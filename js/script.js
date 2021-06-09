'use strict';

const todoControl = document.querySelector('.todo-control'),
   headerInput = document.querySelector('.header-input'),
   todoList = document.querySelector('.todo-list'),
   todoCompleted = document.querySelector('.todo-completed');



let todoData = [];


// localStorage.todoData = JSON.stringify(todoData);

const render = () => {
   // console.log(JSON.parse(localStorage.todoData));
   todoList.textContent = '';
   todoCompleted.textContent = '';

   todoData.forEach((item, index) => {
      const li = document.createElement('li');
      li.classList.add('todo-item');
      li.innerHTML = `<span class="text-todo">${item.value}</span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>`;
      if (item.completed) {
         todoCompleted.append(li);
      } else {
         todoList.append(li);
      }
      const todoComplete = li.querySelector('.todo-complete');
      todoComplete.addEventListener('click', () => {
         item.completed = !item.completed;
         render();
      });
      const todoRemove = li.querySelector('.todo-remove');
      todoRemove.addEventListener('click', event => {
         todoData.splice(index, 1);
         console.log(todoData);
         render();
      });
      localStorage.todoData = JSON.stringify(todoData);
   });
   localStorage.todoData = JSON.stringify(todoData);
};

todoControl.addEventListener('submit', event => {
   event.preventDefault();

   const newTodo = {
      value: headerInput.value,
      completed: false
   };
   if (headerInput.value) {
      todoData.push(newTodo);
      render();
      headerInput.value = '';
   }
});
todoData = JSON.parse(localStorage.todoData);
render();