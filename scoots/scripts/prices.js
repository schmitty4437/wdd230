document.addEventListener('DOMContentLoaded', function() {
    fetch('data/prices.json')
        .then(response => response.json())
        .then(data => {
            populateTable(data);
            populateRentalPrices(data);
        })
        .catch(error => console.error('Error fetching the JSON data:', error));

    function populateTable(data) {
        const tableBody = document.querySelector('#rentalTable tbody');
        data.rentalPricing.forEach(item => {
            const row = document.createElement('tr');

            const rentalTypeCell = document.createElement('td');
            rentalTypeCell.textContent = item.rentalType;
            rentalTypeCell.setAttribute('data-label', 'Rental Type');
            row.appendChild(rentalTypeCell);

            const maxPersonsCell = document.createElement('td');
            maxPersonsCell.textContent = item.maxPersons;
            maxPersonsCell.setAttribute('data-label', 'Max Persons');
            row.appendChild(maxPersonsCell);

            const reservationHalfDayCell = document.createElement('td');
            reservationHalfDayCell.textContent = `$${item.reservation.halfDay}`;
            reservationHalfDayCell.setAttribute('data-label', 'Half Day (Reservation Price)');
            row.appendChild(reservationHalfDayCell);

            const reservationFullDayCell = document.createElement('td');
            reservationFullDayCell.textContent = `$${item.reservation.fullDay}`;
            reservationFullDayCell.setAttribute('data-label', 'Full Day (Reservation Price)');
            row.appendChild(reservationFullDayCell);

            const walkInHalfDayCell = document.createElement('td');
            walkInHalfDayCell.textContent = `$${item.walkIn.halfDay}`;
            walkInHalfDayCell.setAttribute('data-label', 'Half Day (Walk-In Price)');
            row.appendChild(walkInHalfDayCell);

            const walkInFullDayCell = document.createElement('td');
            walkInFullDayCell.textContent = `$${item.walkIn.fullDay}`;
            walkInFullDayCell.setAttribute('data-label', 'Full Day (Walk-In Price)');
            row.appendChild(walkInFullDayCell);

            tableBody.appendChild(row);
        });
    }

    function populateRentalPrices(data) {
        const scootersPrice = data.rentalPricing.find(item => item.rentalType === 'Honda Metro Scooter').reservation.fullDay;
        const jeepPrice = data.rentalPricing.find(item => item.rentalType === 'Jeep Wrangler - 4 door with a/c').reservation.fullDay;
        const atvPrice = data.rentalPricing.find(item => item.rentalType === 'Honda Pioneer ATV').reservation.fullDay;

        document.querySelector('.scoots p').textContent = `Full Day Price: $${scootersPrice}`;
        document.querySelector('.jeep p').textContent = `Full Day Price: $${jeepPrice}`;
        document.querySelector('.atv p').textContent = `Full Day Price: $${atvPrice}`;
    }
});
