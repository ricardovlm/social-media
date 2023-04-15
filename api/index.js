const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require('./routes/users')
const userAuth = require('./routes/auth')
const postRoute = require("./routes/posts")

const multer = require('multer');
const path = require('path')
const fileUpload = require('express-fileupload');
const { log } = require("console");

dotenv.config();

// Connect to BBDD
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection to BBDD");
    }
});

app.use('/images', express.static(path.join(__dirname, 'public/images'))) 

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(fileUpload({
    debug:false
}));

/* const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        console.dir(req.body);
        cb(null,req.file)
    }
})

const upload = multer({ storage:storage })
 */

app.post("/api/upload", (req, res) => {
    console.log(req.files);
    const file = req.files.file;
   /*  const prop = {'customname': req.files.file.md5 + '-' + req.files.file.name};
    const obj = { ...file, ...prop} */
    //file.name = req.files.file.md5 + '-' + req.files.file.name
    const uploadPath =  path.join(__dirname, '/public/images/', file.name)
    console.log(file);
    console.log(uploadPath);
    try {
        file.mv(uploadPath, function(err) {
            if (err)
             return res.status(500).send(err);
           
             res.status(200).json("File uploaded successfuly")
           });
       // return res.status(200).json("File uploaded successfuly")
    } catch (error) {
        console.log(error);
    }
})

app.use('/api/users', userRoute);
app.use('/api/auth', userAuth);
app.use('/api/posts', postRoute)


// se crea el servidor
app.listen(8888, () => {
    console.log("SERVER IS RUNNING");
})