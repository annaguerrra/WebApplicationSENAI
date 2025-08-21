const AddTask = () => {
    const inputText = document.getElementById('input').value.trim();
    if (inputText === '') return;

    const li = document.createElement('li');
    li.textContent = inputText;

    const taskList = document.getElementById('tasklist');
    taskList.appendChild(li);

    document.getElementById('input').value = '';

    let check = document.createElement('check');
    check.id = "check";

    check.textContent = "✔";
    check.style.cursor = "pointer";
    check.style.display = "flex";
    check.style.fontSize = "20px";
    check.style.marginLeft = "10px";
    check.style.color = "rgb(129, 199, 25)";

    check.onclick = () => {
        li.classList.toggle("checked");
    };

    li.appendChild(check);

};
