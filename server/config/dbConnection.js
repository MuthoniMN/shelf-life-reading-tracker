const { MongoClient } = require('mongodb')
const db = process.env.MONGO_URI

const client = new MongoClient(db, {
    useNewURLParser: true,
    useUnifiedTopology: true,
})

let _db;

module.exports = {
    connectToDB: function (callback) {
        client.connect(function(err, db) {
            if(db){
                _db = db.db("books")
                console.log("Succesfully connected to the database.")
            }
            return callback(err)
        });
    },
    getDB: function () {
        return _db;
    },
}