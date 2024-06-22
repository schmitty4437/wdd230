const url = 'https://schmitty4437.github.io/wdd230/data/members.json';
const cards = document.querySelector('#cards');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    // console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let image = document.createElement("img");
        let name = document.createElement("h2");
        let membership = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let email = document.createElement("p");

        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', member.alt);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '350');
        image.setAttribute('height', '350');

        name.textContent = member.name;
        membership.textContent = member.membershipLevel;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.innerHTML = `<a href="http://${member.website}" target="_blank">${member.website}</a>`;
        email.textContent = member.email;

        card.append(image);
        card.append(name);
        card.append(membership)
        card.append(address);
        card.append(phone);
        card.append(website);
        card.append(email);

        cards.appendChild(card);
    });
}

getMembers();




const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");

    gridbutton.style.background = '#F26A4B';
    gridbutton.style.color = '#000';

    listbutton.style.background = '#254559';
    listbutton.style.color = '#F2EBDC';
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");

    listbutton.style.background = '#F26A4B';
    listbutton.style.color = '#000';

    gridbutton.style.background = '#254559';
    gridbutton.style.color = '#F2EBDC';
}