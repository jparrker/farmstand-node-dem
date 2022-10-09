
const mongoose = require('mongoose')
const Product = require("./models/product")


const DB_STRING = "mongodb+srv://todoAppUser:Taco9000@cluster0.gxxn3.mongodb.net/shopApp?retryWrites=true&w=majority"
mongoose.connect(DB_STRING).then(() => {
  console.log('mongo connection open')
})
.catch(err => {
  console.log("connection error!")
  console.log(err)
})

// const p = new Product({
//   name: "Ruby Grapefruit",
//   price: 1.99,
//   category: 'fruit'
// })

// p.save().then(p=> {
//   console.log(p)
// })
const seedProducts = [
  {
    name: 'Fairy Eggplant',
    price: 1.00,
    category: 'vegetable' 
  },
  {
    name: 'Organic Goddess Melon',
    price: 4.99 ,
    category: 'fruit'
  },
  {
    name: 'Organic Mini Seedless Watermelon' ,
    price: 3.99,
    category: 'fruit'
  },
  {
    name: 'Organic Celery',
    price: 1.50,
    category: 'vegetable'
  },
  {
    name: 'Chocolate Whole Milk',
    price: 3.69,
    category: 'dairy'
  }
]

Product.insertMany(seedProducts)
.then(res => console.log(res))
.catch(e => {
  console.log(e)
})