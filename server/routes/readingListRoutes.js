const express = require('express')

// used to define the routes
const readingListRoutes = express.Router()

// connect to the database
const dbConn = require('../config/dbConnection')

// convet id from string to the ObjectId for the _id
const ObjectId = require('mongodb').ObjectId;

// get all the books on the reading list
readingListRoutes.route("/reading-list").get( (req, res) => {
    let db_connection = dbConn.getDB("books")

    db_connection
        .collection("list")
        .find( {} )
        .toArray(function (err, data) {
            if(err) throw err;
            res.json(data)
    })
} )

// get a book from the reading list based on the id
readingListRoutes.route('/reading-list/:id').get( (req, res) => {
    let db_connection = dbConn.getDB()
    let query = {
        _id: ObjectId(req.params.id)
    };

    db_connection
        .collection("list")
        .find( query ,function (err, data) {
            if(err) throw err;
            res.json(data)
    })
} )

// adding a book to the reading list
readingListRoutes.route('/reading-list/new').post( (req, res) => {
    let db_connection = dbConn.getDB()
    let date = new Date()
    let bookEntry = {
        name: req.body.name,
        description: req.body.description,
        genre: req.body.genre,
        img: req.body.coverImg,
        totalPages: req.body.pages,
        currentPage: req.body.currentPage || 0,
        date: date.toLocaleDateString()
    }

    db_connection
        .collection('list')
        .insertOne(bookEntry, (err, data) => {
            if(err) throw err;
            res.json(data)
        } )
} )

// update a book in the reading list
readingListRoutes.route('/reading-list/:id').put( (req, res) => {
    let db_connection = dbConn.getDB()
    let queryId = ObjectId(req.params.id)
    let updatedFields = {
        $set: {
            currentPage: req.body.currentPage,
        }
    }

    db_connection
        .collection('list')
        .updateOne(queryId, updatedFields, (err, data) => {
            if(err) throw err;
            console.log("Book updated!")
            res.json(data)
        })
} )

// delete a book from the reading list
readingListRoutes.route('/reading-list/:id').delete( (req, res) => {
    let db_connection = dbConn.getDB();
    let queryId = ObjectId(req.params.id);

    db_connection
        .collection('list')
        .deleteOne(queryId, (err, data) => {
            if(err) throw err;
            console.log("Book deleted")
            res.json(data)
        })
} )

module.exports = readingListRoutes;