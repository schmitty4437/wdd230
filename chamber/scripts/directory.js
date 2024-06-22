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
        let websites = member.websites.map(website => `<a href="${website.website}" target="_blak">${website.website}</a>`);
        let email = document.createElement("p");

        image.setAttribute('src', member.image);
        image.setAttribute('alt', member.alt);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '350');
        image.setAttribute('height', '350');

        name.textContent = member.name;
        membership.textContent = member.membershipLevel;
        address.textContent = member.address;
        phone.textContent = member.phone;
        email.textContent = member.email;
        

        

        card.append(image);
        card.append(name);
        card.append(address);
        card.append(phone);
        card.append(websites);
        card.append(email);

        cards.appendChild(card);
    });
}

getMembers();