const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//middleware

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

const popCharRoute = require('./routes/PopChars');
app.use('/pop-char', popCharRoute);

const ethnicHierarchyRoute = require('./routes/EthnicHierarchys');
app.use('/eth-Hierarchy', ethnicHierarchyRoute);

const graphDataRoute = require ('./routes/graphRoutes');
app.use('/graphdata', graphDataRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

//commect to DB

mongoose.set('bufferCommands', false);

var mongoDB = 'mongodb+srv://overlandmike:Stelmos1Jish3fuu@cluster0-8tacg.mongodb.net/ethnicProfiles?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true  });

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
    console.log("Successfully connected to MongoDB!");
  });

//Listen
app.listen(3000);