import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Define your routes and API endpoints

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    // Serve the main HTML file that loads your React app
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });