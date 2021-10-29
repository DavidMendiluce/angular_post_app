const { APP_BASE_HREF } = require('@angular/common');
const path = require("path");
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const Post = require('./models/post.js');

const app = express();
//mongosh "mongodb+srv://cluster0.is2jg.mongodb.net/myFirstDatabase" --username userAngular
mongoose.connect('mongodb+srv://userAngular:passwordAngular@cluster0.is2jg.mongodb.net/node-angular')
.then(() => {
  console.log('Connected to database');
})
.catch(()=> {
  console.log('Connection failed!');
});

var cors= require('cors');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) =>{
  cors({origin:true,credentials: true});
  /*res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS');*/
  next();
});

app.options('*', cors());

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
