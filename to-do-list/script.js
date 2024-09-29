document.querySelector('.btn-add')
 .addEventListener('click',add);



 function add() {

 let inputElement = document.querySelector('.input-text');

 document.querySelector('.result')
    .innerHTML = inputElement.value;
 }

function press(event) {
    if(event.key === "Enter") {
        add();
    }
}
 