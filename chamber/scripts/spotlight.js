const url = 'https://schmitty4437.github.io/wdd230/data/members.json';
const spotsContainer = document.querySelector('#spots');

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayRandomMembers(data.members);
}

const displayRandomMembers = (members) => {
    // Filter members with Gold or Silver membership
    const filteredMembers = members.filter(member => 
        member.membershipLevel === 'Gold Member' || member.membershipLevel === 'Silver Member'
    );

    // Shuffle the array and pick the first three members
    const shuffledMembers = shuffleArray(filteredMembers).slice(0, 3);

    // Display the members
    shuffledMembers.forEach(member => {
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

        spotsContainer.appendChild(card);
    });
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

getMembers();
