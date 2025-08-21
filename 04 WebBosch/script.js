const AddTask = () => {

    const inputText = document.getElementById('input').value.trim();
    if(inputText == '') return;
        
    const li = document.createElement('li');

    li.textContent = inputText;

    const taskList = document.getElementById('tasklist');
    taskList.appendChild(li);

    document.getElementById('input').value='';

    let check = document.createElement('check');
    check.id = "check"
    check.style.backgroundColor = "rgba(101, 101, 102, 0.363);" 
    check.style.color = "rgb(129, 199, 25);";
    check.style.fontSize = "20px";
    check.style.display = "flex"
    check.style.alignItems = "center" 
    check.onclick = ;

}

const DeleteTask = () => {
    
    const 
}
