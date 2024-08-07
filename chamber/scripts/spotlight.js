const spotlightUrl = 'https://schmitty4437.github.io/wdd230/data/members.json';
const spotsContainer = document.querySelector('#spots');

async function getSpotlightMembers() {
    try {
        const response = await fetch(spotlightUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log("Fetched data:", data);
        displayRandomMembers(data.members);
    } catch (error) {
        console.error("Fetching error: ", error);
    }
}

const displayRandomMembers = (members) => {
    const filteredMembers = members.filter(member => 
        member.membershipLevel === 'Gold Member' || member.membershipLevel === 'Silver Member'
    );

    console.log("Filtered members:", filteredMembers); 

    const shuffledMembers = shuffleArray(filteredMembers).slice(0, 3);

    console.log("Shuffled members:", shuffledMembers); 

    spotsContainer.innerHTML = '';

    shuffledMembers.forEach(member => {
        let card = document.createElement("div"); 
        card.classList.add('spot-item'); 

        let image = document.createElement("img");
        image.setAttribute('src', `images/${member.image}`);
        image.setAttribute('alt', member.alt);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '350');
        image.setAttribute('height', '350');

        let name = document.createElement("h2");
        name.textContent = member.name;

        let membership = document.createElement("h3");
        membership.textContent = member.membershipLevel;

        let address = document.createElement("p");
        address.textContent = member.address;

        let phone = document.createElement("p");
        phone.textContent = member.phone;

        let website = document.createElement("p");
        website.innerHTML = `<a href="http://${member.website}" target="_blank">${member.website}</a>`;

        let email = document.createElement("p");
        email.textContent = member.email;

        card.append(image);
        card.append(name);
        card.append(membership);
        card.append(address);
        card.append(phone);
        card.append(website);
        card.append(email);

        spotsContainer.appendChild(card);
    });

    console.log("Members displayed");
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

getSpotlightMembers();
