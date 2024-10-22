 
require ("dotenv").config();
console.log(process.env.PORT);

 const {dbConnect} = require("./Database/DBconnet.js")
dbConnect()