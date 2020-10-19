const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(`${__dirname}/client/build`));

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/client/build/index.html`);
// });

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Connected');
});

const router = require('./routes/covid');
const politicRouter = require('./routes/politic');
const sportRouter = require('./routes/sport');


app.use('/api/covid/', router);
app.use('/api/politic/', politicRouter);
app.use('/api/sport/', sportRouter);

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});