
const MongoClient = require('mongodb').MongoClient
const collectionString = "mongodb://127.0.0.1:27017"
/*MongoClient.connect('mongodb://localhost:27017/latihan', (err, client) => {
  if (err) throw err

  const db = client.db('latihan')

  db.collection('users').find().toArray((err, result) => {
    if (err) throw err

    console.log(result)
  })
}) */

MongoClient.connect(collectionString)
.then(async(client) => {
    console.log("server database conect");
    const db = client.db("latihan");

    const quetes = await db.collection("users").find().toArray();
    console.log(quetes);
})
.catch((error)=>console.error(error));