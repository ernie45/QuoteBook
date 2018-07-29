const firebase = require("firebase");
var config = {
    apiKey: process.env.QUOTEBOOK_API_KEY,
    authDomain: "quote-book-64374.firebaseapp.com",
    databaseURL: "https://quote-book-64374.firebaseio.com",
    projectId: "quote-book-64374",
    storageBucket: "",
    messagingSenderId: "460460843556" 
};

firebase.initializeApp(config);
var database = firebase.database();
const quoteController = {
    pullDatabaseQuotes: (req, res, next) => {
        console.log(`The api key is ${process.env.QUOTEBOOK_API_KEY}`);
        const cards = [];
        /** Listen in for database /quotes */
        /** Upon a change in a quote's value, take a snapshot */
        database.ref("/quotes").on("value", (snapshot) => {
            /** For every child in the snapshot */
            snapshot.forEach(childSnap => {
                cards.push(childSnap.val().quote);
            });
            res.send(cards);
        });
    }
};

module.exports = quoteController;