const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Registration").then(() => {
    console.log(`Connections successful`);
}).catch((e) => {
    console.log(`Failed Connection`);
})