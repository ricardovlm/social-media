const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/users')
const userAuth = require('./routes/auth')
const postRoute = require("./routes/posts")

dotenv.config();

// Connect to BBDD
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection to BBDD");
    }
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users', userRoute);
app.use('/api/auth', userAuth);
app.use('/api/posts', postRoute)


app.get('/', (req, res) => {
    res.send('Welcome to home')
})

app.get('/users', (req, res) => {
    res.send('Welcome to users')
})


// se crea el servidor
app.listen(8800, () => {
    console.log("SERVER IS RUNNING");
})