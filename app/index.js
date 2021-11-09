// create an express app
const express = require("express");
const mongoose = require("mongoose");
const { json, urlencoded } = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_DB_URI = 'mongodb+srv://qc-user:Qwerty123@cluster0.grjyb.mongodb.net/qc-hr-app?retryWrites=true&w=majority';
const Profile = require('./models/profile');

mongoose.connection.on('connected', () => {
    console.info('MongoDB connection successful');
});
mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB connection disconnected');
});
mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

app.use(express.static("public"));
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors({ origin: '*' }));

app.post("/api/profiles", async (req, res) => {
    const profile = new Profile(req.body);
    await profile.save();

    res.json({
        success: true,
        profile,
    });
});

app.get("/api/profiles", async (req, res) => {
    const profiles = await Profile.find({});

    res.json({
        success: true,
        profiles,
    });
});

app.get("/api/profiles/:id", async (req, res) => {
    const profile = await Profile.findById(req.params.id);

    res.json({
        success: true,
        profile,
    });
});


//Set up default mongoose connection
mongoose.connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
    bufferCommands: false,
}, () => {
    app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
});
