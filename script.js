//your JS code here. If required.
function getRandomDelay() {
	return Math.floor(Math.random() * 3) + 1;
}

const promise1 = new Promise((resolve) => {
	setTimeout(() => {
		resolve(getRandomDelay());
	}, getRandomDelay() * 1000);
});

const promise2 = new Promise((resolve) => {
	setTimeout(() => {
		resolve(getRandomDelay());
	}, getRandomDelay() * 1000);
});

const promise3 = new Promise((resolve) => {
	setTimeout(() => {
		resolve(getRandomDelay());
	}, getRandomDelay() * 1000);
});


function populateTable(res) {
	const output = document.getElementById('output');

	console.log("Adding loading row...");
	document.getElementById('output').innerHTML = '<tr id="loading"><td colspan="2">Loading...</td></tr>';

// After removing loading row
	console.log("Removing loading row...");
	output.innerHTML = ''

	const promiseNames = ['Promise 1', 'Promise 2', 'Promise 3'];

	res.forEach((result, index) => {
		const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const timeCell = document.createElement('td');

		nameCell.textContent = promiseNames[index];
        timeCell.textContent = result.toFixed(3);

		row.appendChild(nameCell);
        row.appendChild(timeCell);
        output.appendChild(row);
	});

	const totalTime = Math.max(...res).toFixed(3);

	const totalRow = document.createElement('tr');
    const totalNameCell = document.createElement('td');
    const totalTimeCell = document.createElement('td');

	totalNameCell.textContent = 'Total';
    totalTimeCell.textContent = totalTime;

    totalRow.appendChild(totalNameCell);
    totalRow.appendChild(totalTimeCell);
    output.appendChild(totalRow);
}

Promise.all([promise1, promise2, promise3])
	.then((results) => {
	    populateTable(results);
});


document.getElementById('output').innerHTML = '<tr><td colspan="2">Loading...</td></tr>';









