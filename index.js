const express = require("express");
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// const objectID=require('mongodb').ObjectId;

//Please add .env file in .gitignore
//DB_USER
//DB_PASSWORD

//Middleware
app.use(cors());
app.use(express.json());
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q66zrl2.mongodb.net/?retryWrites=true&w=majority`;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mjpzktk.mongodb.net/?retryWrites=true&w=majority`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
    }
});

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress2").collection("myuser");

    }
    finally {
        // await client.close()
    }
}



app.get("/", (req, res) => {
    res.send("amr sonar bangla");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});