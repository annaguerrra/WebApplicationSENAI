const AddTask = () => {
    const inputText = document.getElementById('input').value.trim();
    if (inputText === '') return;

    const li = document.createElement('li');
    li.textContent = inputText;

    const taskList = document.getElementById('tasklist');
    taskList.appendChild(li);

    document.getElementById('input').value = '';

    let checkTask = document.createElement('button');
    checkTask.id = "check";

    checkTask.textContent = "✔";
    checkTask.style.cursor = "pointer";
    checkTask.style.display = "flex";
    checkTask.style.fontSize = "20px";
    checkTask.style.marginLeft = "10px";
    checkTask.style.color = "rgb(129, 199, 25)";
    checkTask.style.border = "none";
    checkTask.style.background = "none";

    checkTask.onclick = () => {
        li.classList.toggle("checked");
    };

    li.appendChild(checkTask);

    let deleteTask = document.createElement('button');
    deleteTask.id = "deleteb";

    deleteTask.textContent = "🗑️"
    deleteTask.style.cursor = "pointer";
    deleteTask.style.display = "flex";
    deleteTask.style.fontSize = "20px"
    deleteTask.style.marginLeft = "10px";
    deleteTask.style.border = "none";
    deleteTask.style.background = "none";
    deleteTask.onclick = () => {
        li.remove();
    };

    li.appendChild(deleteTask);
};

