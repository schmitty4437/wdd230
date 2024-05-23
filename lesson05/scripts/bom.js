const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const holder = document.querySelector('#favchap');

button.addEventListener('click', () => {
    if (input.value !='') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        const completeButton = document.createElement('button');
        const textSpan = document.createElement('span');

        textSpan.textContent = input.value;
        textSpan.classList.add('text');
        completeButton.textContent = '✔️';
        deleteButton.textContent = '❌';
        li.append(textSpan, completeButton, deleteButton);
        list.append(li);

        completeButton.addEventListener('click', () => {
            li.classList.toggle('checked');
        });

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});