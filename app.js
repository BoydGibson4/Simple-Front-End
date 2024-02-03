const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

// Serve HTML file from the 'views' directory
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Handle search form submission
app.post('/searchCocktail', (req, res) => {
    const searchTerm = req.body.searchTerm;
    searchCocktail(searchTerm, res);
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

function searchCocktail(searchTerm, res) {
    // Your existing searchCocktail logic here
    // Make sure to send the response back to the client
}
