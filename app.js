const submitButton = document.getElementById("submitButton");


function addToDo(){
    let container = document.querySelector("div");
    let input = document.querySelector('#todoText').value;
    const todo = document.createElement('li');

    const txt = document.createTextNode(input);
    todo.appendChild(txt);

    container.appendChild(todo);
}

submitButton.addEventListener('click', addToDo);
document.querySelector("section").addEventListener('submit', e => e.preventDefault());
