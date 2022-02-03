const mongoose = require('mongoose')

const Dishes = require('./models/dishes')

const url = 'mongodb://localhost:27017/confusion'
const connect = mongoose.connect(url)

connect.then((db)=>{
    console.log('Connected to server succesfully')

    Dishes.create({
        name: "Efo-riro pelu eja",
        description: "delicious vegetable with iru "
    })
    .then((dish)=>{
        console.log("dish document created: \n then printout");
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id, {
            $set: {description: "updated efo riro description"}
        }, {new: true
        })
        .exec();
    })
    .then((dish)=>{
        console.log("just created document updated: \n then printout");
        console.log(dish);

        dish.comments.push({
            rating: 4,
            comment: "the efo naa my best stew",
            author: "lanre"
        })

        return dish.save()
    })
    .then((dish)=>{
        console.log("just updated doc reupdated with comment added: \n then printOut");
        console.log(dish);

        return Dishes.remove
    })
    .then(()=>{
        console.log("delet document");
        return mongoose.connection.close()
    })
    .catch((err)=>{
        console.log(err)
    })
})