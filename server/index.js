const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer')
const path = require('path')

const app = express();
const port = 3000;
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null,'public/images')
  },
  filename: (req,file,cb) => {
    cb(null, 'file-' + Date.now() + '.' +
    file.originalname.split('.')[file.originalname.split('.').length-1])
  }
})

const upload = multer({
  storage: storage
})

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        throw err
    } 
    console.log('connected to database')
});

app.get('/',(res)=>{
  const sql = `SELECT * FROM events LEFT JOIN image ON events.imageID = image.imageID`;
  db.query(sql,(err,result)=>{
    if(err) return res.json({Message:"ERROR"})
    return res.json(result)
  })
})

app.get('/search',(req,res)=>{
  const {q} = req.query;
  const sql = `SELECT * FROM events LEFT JOIN image ON events.imageID = image.imageID WHERE EventName LIKE ?`;
  db.query(sql,[q],(err,result)=>{
    if(err) {return res.json({Message:err})}
    return res.json(result)
  })
})

app.post('/upload', upload.single('image'),(req, res) => {
  const image = req.file.filename;
  const sql = `INSERT INTO image (imageFile) VALUES (?)`;
  db.query(sql,[image],(err,result)=>{
    if(err) {return res.json({Message:"ERROR"})}
    return res.json({Status:"Success"})
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});