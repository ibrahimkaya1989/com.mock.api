const express = require('express');
const app = express();
const port = 3000;

// Define a route that returns a specific JSON response
app.get('/api/data', (req, res) => {
  const jsonResponse = {
    message: 'Hello, this is a specific JSON response!',
    data: {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
      key4: 'value4',
      key5: 'value5'
    }
  };

  // Set the Content-Type header to application/json
  res.setHeader('Content-Type', 'application/json');

  // Send the JSON response
  res.send(JSON.stringify(jsonResponse, null, 2));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});