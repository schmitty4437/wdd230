const url = 'https://schmitty4437.github.io/wdd230/data/directory.json';
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
        

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        birthday.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.append(fullName);
        card.append(birthday);
        card.append(birthplace);
        card.append(portrait);

        cards.appendChild(card);
    });
}

getProphetData();