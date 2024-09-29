const todoList = [{
    name:'make dinner',
    dueDate:'2022-12-22'
},{
    name:'wash dishes',
    dueDate: '2022-12-22'
}];

/*
function renderTodoList () {
    let todoListHTML = '';
    
    for (let i=0; i<todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        // const {name,dueDate} = todoObject  destructuring

        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick = "
                todoList.splice(${i},1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list')
     .innerHTML = todoListHTML;

     console.log()
}

function addTodo () {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name:name,
        dueDate:dueDate

        // name,
        // dueDate    if property and varailbe name are same we can  write like  commented   called as shorthand property
    });

    inputElement.value = '';

    renderTodoList();
}
*/



function renderTodoList () {
    let todoListHTML = '';

    todoList.forEach(function(todoObject,index){
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;


        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick = "
                todoList.splice(${index},1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });
    
 
    document.querySelector('.js-todo-list')
     .innerHTML = todoListHTML;

     console.log()
}

function addTodo () {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        name:name,
        dueDate:dueDate

        // name,
        // dueDate    if property and varailbe name are same we can  write like  commented   called as shorthand property
    });

    inputElement.value = '';

    renderTodoList();
}

const btn = document.querySelector('.js-add-todo-button');
    btn.addEventListener('click',addTodo);
