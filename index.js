const mongoose = require('mongoose')

const Dishes = require('./models/dishes')

const url = 'mongodb://localhost:27017/confusion'
const connect = mongoose.connect(url)

connect.then((db)=>{
    console.log('Connected to server succesfully')

    Dishes.create({
        name: "Efo-riro pelu ponm",
        description: "delicious vegetable with iru "
    })
    .then((dish)=>{
        console.log(dish);

        return Dishes.find({});
    })
    .then((dishes)=>{
        console.log(dishes);

        return Dishes.deleteOne({})
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err)
    })
})