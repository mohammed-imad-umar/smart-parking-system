
const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(express.json());

// DB connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'smart_parking'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Book a slot
app.post('/book', (req, res) => {
    const { slot_id, user_id } = req.body;
    res.json({ message: `Slot ${slot_id} booked by user ${user_id}` });
});

// Get slot status
app.get('/status', (req, res) => {
    res.json({ slots: [ {id: 1, status: 'booked'}, {id: 2, status: 'available'} ] });
});

// Manage slots
app.post('/slots', (req, res) => {
    res.json({ message: 'Slots updated successfully' });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
