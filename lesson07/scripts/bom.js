const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {  
        displayList(input.value); 
        chaptersArray.push(input.value);  
        setChapterList();
        input.value = ''; 
        input.focus(); 
    }
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');
    const textSpan = document.createElement('span');

    textSpan.textContent = item;
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
        deleteChapter(item);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}