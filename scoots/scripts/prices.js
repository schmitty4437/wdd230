document.addEventListener('DOMContentLoaded', function() {
    // Fetch the JSON data from the data folder
    fetch('data/prices.json')
        .then(response => response.json())
        .then(data => {
            populateTable(data);
            populateRentalPrices(data);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));

    // Function to populate the table
    function populateTable(data) {
        const tableBody = document.querySelector('#rentalTable tbody');
        data.rentalPricing.forEach(item => {
            const row = document.createElement('tr');

            const rentalTypeCell = document.createElement('td');
            rentalTypeCell.textContent = item.rentalType;
            row.appendChild(rentalTypeCell);

            const maxPersonsCell = document.createElement('td');
            maxPersonsCell.textContent = item.maxPersons;
            row.appendChild(maxPersonsCell);

            const reservationHalfDayCell = document.createElement('td');
            reservationHalfDayCell.textContent = `$${item.reservation.halfDay}`;
            row.appendChild(reservationHalfDayCell);

            const reservationFullDayCell = document.createElement('td');
            reservationFullDayCell.textContent = `$${item.reservation.fullDay}`;
            row.appendChild(reservationFullDayCell);

            const walkInHalfDayCell = document.createElement('td');
            walkInHalfDayCell.textContent = `$${item.walkIn.halfDay}`;
            row.appendChild(walkInHalfDayCell);

            const walkInFullDayCell = document.createElement('td');
            walkInFullDayCell.textContent = `$${item.walkIn.fullDay}`;
            row.appendChild(walkInFullDayCell);

            tableBody.appendChild(row);
        });
    }

    // Populate the rental prices for best value section
    function populateRentalPrices(data) {
        const scootersPrice = data.rentalPricing.find(item => item.rentalType === 'Honda Metro Scooter').reservation.fullDay;
        const jeepPrice = data.rentalPricing.find(item => item.rentalType === 'Jeep Wrangler - 4 door with a/c').reservation.fullDay;
        const atvPrice = data.rentalPricing.find(item => item.rentalType === 'Honda Pioneer ATV').reservation.fullDay;

        document.querySelector('.scoots p').textContent = `Full Day Price: $${scootersPrice}`;
        document.querySelector('.jeep p').textContent = `Full Day Price: $${jeepPrice}`;
        document.querySelector('.atv p').textContent = `Full Day Price: $${atvPrice}`;
    }
});
