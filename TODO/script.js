var box = document.querySelector('#out');
var todo_input = document.querySelector('input');

function addItem(){
    if(todo_input.value != '')
    {
        let container = document.createElement('label');
        let check = document.createElement('input');
        let span = document.createElement('span');
        let label = document.createElement('label');
        let trash = document.createElement('a');
        let image = document.createElement('img');
        container.className = "container";
        trash.href = "#";
        trash.onclick = function delItem()
        {
            let result = confirm("Delete?");
            if(result == true)
            {
                container.remove();
            }
        };
        image.src = "data:image/png;base64,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"
        image.height = 15;
        check.type = "checkbox";
        check.id = "check";
        span.className = "checkmark";
        trash.appendChild(image);
        container.appendChild(check);
        container.appendChild(span);
        container.appendChild(label);
        container.appendChild(trash);
        label.innerHTML = todo_input.value;
        box.appendChild(container);
        todo_input.value = "";
    }
}