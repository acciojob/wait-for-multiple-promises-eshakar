function getRandomDelay() {
        return Math.random() * 2 + 1; // Random between 1 and 3
      }

      // Create promises that resolve with their actual resolution time
      function createPromise(promiseNumber) {
        const delay = getRandomDelay();
        const startTime = Date.now();
        
        return new Promise((resolve) => {
          setTimeout(() => {
            const actualTime = (Date.now() - startTime) / 1000; // Convert to seconds
            resolve(actualTime);
          }, delay * 1000);
        });
      }

      // Create the three promises
      const promise1 = createPromise(1);
      const promise2 = createPromise(2);
      const promise3 = createPromise(3);

      // Function to populate the table with results
      function populateTable(results, totalTime) {
        const output = document.getElementById('output');
        
        // Clear the table (remove loading row)
        output.innerHTML = '';
        
        const promiseNames = ['Promise 1', 'Promise 2', 'Promise 3'];
        
        // Add rows for each promise
        results.forEach((result, index) => {
          const row = document.createElement('tr');
          const nameCell = document.createElement('td');
          const timeCell = document.createElement('td');
          
          nameCell.textContent = promiseNames[index];
          timeCell.textContent = result.toFixed(3);
          
          row.appendChild(nameCell);
          row.appendChild(timeCell);
          output.appendChild(row);
        });
        
        // Add total row
        const totalRow = document.createElement('tr');
        const totalNameCell = document.createElement('td');
        const totalTimeCell = document.createElement('td');
        
        totalNameCell.textContent = 'Total';
        totalTimeCell.textContent = totalTime.toFixed(3);
        
        totalRow.appendChild(totalNameCell);
        totalRow.appendChild(totalTimeCell);
        output.appendChild(totalRow);
      }

      // Record start time for total calculation
      const startTime = Date.now();

      // Use Promise.all to wait for all promises to resolve
      Promise.all([promise1, promise2, promise3])
        .then((results) => {
          const totalTime = (Date.now() - startTime) / 1000; // Total time in seconds
          populateTable(results, totalTime);
        })
        .catch((error) => {
          console.error('Error resolving promises:', error);
        });


