const express = require('express');
const connectDB = require('./config/db.js');
var cors = require('./config/db.js');

const app = express();

//connect database
connectDB();

//cors
app.use(cors({ origin: true, credentials: true }));

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world'));

//use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port: ${port}`));