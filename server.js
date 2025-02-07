import express from 'express';
import path from 'path';

const app = express();
const __dirname = path.resolve(); // Ensure correct directory handling

// Serve static files from the "pages" folder
app.use(express.static(path.join(__dirname, 'pages')));

// Routes to serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html' ));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.css' ));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,  'home.html'));
});

app.get('/expenses', (req, res) => {
    res.sendFile(path.join(__dirname, 'expenses.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
