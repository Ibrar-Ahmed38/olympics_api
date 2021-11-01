const monngoose = require('mongoose')
monngoose.connect("mongodb://localhost:27017/olympics")
.then( ()=> console.log(`Server is OK`))
.catch( (err)=> console.log(err))