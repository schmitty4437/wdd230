const baseURL = "https://schmitty4437.github.io/wdd230/";
const linksURL = "https://schmitty4437.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    // console.log(data);
    displayLinks(data);

}


function displayLinks(data) {
    const lessonList = document.getElementById('card-activities').querySelector('ul');

    data.lessons.forEach(lesson => {
        const li = document.createElement('li');
        const links = lesson.links.map(link => `<a href="${link.url}" target="_blak">${link.title}</a>`);
        li.innerHTML = `${lesson.lessons}: ${links.join(' | ')}`;
        lessonList.appendChild(li);
    });    
}

getLinks();