//! lavel 1

//? Quetion no. 1

use("test");

db.user.insertMany([
     {
          name: "Rahul kumar",
          age: 20,
          city: "Delhi",
          email: "Rahulkumar@gmail.com",
          phone: "9845753321",
          isActive: true
     },
     {
          name: "Shivam kumar",
          age: 18,
          city: "Delhi",
          email: "Shivamkumar@gmail.com",
          phone: "9302520465",
          isActive: false
     },
     {
          name: "neha rathod",
          age: 25,
          city: "Delhi",
          email: "neharathod@gmail.com",
          phone: "9203301764",
          isActive: true
     },
     {
          name: "ayush kumar",
          age: 15,
          city: "Delhi",
          email: "AyushKumar@gmail.com",
          phone: "8305301864",
          isActive: false
     },
     {
          name: "Arpita verma",
          age: 18,
          city: "kamlapur",
          email: "Arpitaverma@gmail.com",
          phone: "74629863787",
          isActive: false
     }, {
          name: "Rakhi sarma",
          age: 27,
          city: "Dhingarkheda",
          email: "Rakhi@gmail.com",
          phone: "9302520185",
          isActive: true
     },
     {
          name: "piyush goswami",
          age: 15,
          city: "Hatpipliya",
          email: "piyush@gmail.com",
          phone: "58746584687",
          isActive: true
     },
     {
          name: "piyush varma",
          age: 28,
          city: "indore",
          email: "piyushverma@gmail.com",
          phone: "6566737372",
          isActive: false
     },
     {
          name: "shivam sarma",
          age: 20,
          city: "indore",
          email: "shivamsarma@gmail.com",
          phone: "466354863",
          isActive: true
     },
     {
          name: "shivani rathod",
          age: 16,
          city: "Dhingarkheda",
          email: "shivani@gmail.com",
          phone: "6482364663",
          isActive: false
     },
     {
          name: "kripa rathod",
          age: 20,
          city: "Hatpipliya",
          email: "kripa@gmail.com",
          phone: "568736458",
          isActive: true
     },
])

//! q1

db.user.find({ city: "Delhi" })

//! q2

db.user.find({ age: { $gt: 18 } });

//! q3 

db.user.find({ age: { $lte: 20 } });

//! q4

db.user.find({ city: { $ne: "indore" } });

//! q5

db.user.find({
     $and: [
          { age: { $gt: 20 } },
          { age: { $lt: 30 } }
     ]
});

//? this batter way of this quetion 

db.user.find({ age: { $gt: 20, $lt: 30 } });

//! q6

db.user.find({}, { name: 1, email: 1, _id: 0 });

//! q7

db.user.find({ name: { $regex: "^R" } })

db.user.find({ name: /^R/ })

//! q8

db.user.find({ email: { $regex: /gmail/ } })

db.user.find({ name: /gmail/ })

//! q9

//? fiel hain ya nhi 

db.user.find({ city: { $exists: true } })

//! q10

//? field hai ya nhi 
db.user.find({ phone: { $exists: false } })

//! q11 
//? asending order 

db.user.find().sort({ age: -1 })

//! q12
//? disending order

db.user.find().sort({ age: 1 })

//! q13

db.user.find().limit(5)

//! q 14

// const data = db.user.find().skip(5).limit(5)
// console.log(data);

//! q 15 


//?my 
db.user.find({
     $or: [
          { age: { $eq: 20 } },
          { age: { $eq: 15 } },
          { age: { $eq: 30 } },
     ]
})
//? on yutube
db.user.find({
     age: { $in: [20, 25, 30] }
});


//!q 16

db.user.find({
     age: { $nin: [20, 25, 30] }
})

//! q17

db.user.countDocuments()

//! q 18 

const us = db.user.find({
     name: 'Rahul sarma',
     city: "Delhi"
})

db.user.find({
     $and: [
          { name: "Rahul sarma" },
          { city: "Delhi" }
     ]
})

// console.log(us)

//! q 19

db.user.find({
     $or: [
          { city: "Delhi" },
          { city: "indore" },
     ]
})

//! q 20 

db.user.find({
     age: { $lte: 30 }
});

db.user.find({
     age: { $not: { $gt: 30 } }
})

//! q 21 

db.user.find({
     name: { $regex: "A$" }
})

db.user.find({
     name: /A$/
})

//! q 22

db.user.insertOne({
     name: "sarthak sarma",
     age: 21,
     city: "Bhopal",
     email: "sarthaksarma@yahoo.com",
     inActive: true
})


db.user.find({
     email: /yahoo\.com$/
})


//! q 23

db.user.find({
     age:{$type:"number"}
})

//! q 24

db.user.find({
     age:{$mod:[2,0]}
})

//! q 25

db.user.find({
     $expr:{
          $gt:[
               {$strLenCP:'$name'},
               14
          ]
     }
})

//! q 26 

//? sempal data

db.products.insertMany([
    {
        name: "Gaming Laptop",
        price: 75000,
        category: "electronics",
        stock: 15,
        discount: 10,
        tags: ["gaming", "laptop", "electronics"]
    },
    {
        name: "Smartphone",
        price: 25000,
        category: "electronics",
        stock: 8,
        discount: 15,
        tags: ["phone", "android", "electronics"]
    },
    {
        name: "Wireless Mouse",
        price: 800,
        category: "accessories",
        stock: 50,
        discount: 5,
        tags: ["mouse", "computer", "electronics"]
    },
    {
        name: "Mechanical Keyboard",
        price: 3500,
        category: "accessories",
        stock: 20,
        discount: 12,
        tags: ["keyboard", "gaming", "computer"]
    },
    {
        name: "LED Monitor",
        price: 12000,
        category: "electronics",
        stock: 5,
        discount: 18,
        tags: ["monitor", "display", "electronics"]
    },
    {
        name: "Office Chair",
        price: 6000,
        category: "furniture",
        stock: 0,
        discount: 20,
        tags: ["chair", "office", "furniture"]
    },
    {
        name: "Gaming Headset",
        price: 4500,
        category: "electronics",
        stock: 12,
        discount: 25,
        tags: ["gaming", "audio", "electronics"]
    }
])

// todo intermidiate quetions
//! q26

db.products.find({
     price:{$gt:1000}
})
//! q 27 

db.products.find({
     price:{$gt:500,$lt:2000}
})

//! q 28

db.products.find({
     category:'electronics'
})
//! q 29

db.products.find({
     stock:{$lt:10}
})


//! q 30

db.products.find({
     stock:0
})

//! q 31

db.products.find().sort({price:1})

//! q32 

db.products.find().sort({price:-1}).limit(5)


//! q 34 

db.products.find({
     name:/phone/
})

//! q35 

db.products.find({
     discount:{$gt:24}
})

//! q 36

db.products.find({
     category:{$ne:'electronics'}
})


//! q 37

db.products.find({
     tags:'gaming'
})
db.products.find({
     tags:{$in:['gaming']}
})

//! q 38

db.products.find({
     tags:{$all:['gaming','laptop']}
})

//! q 39

db.products.find({
     tags:{$size:3}
})

//! q 40

db.products.updateOne(
     {name:'Gaming Laptop'},
     {$push:{tags:'new'}}
)

//! q 41

db.products.updateOne(
     {name:'Gaming Laptop'},
     {$pull:{tags:'new'}}
)

//! q 42
//? sempal data

db.orders.insertMany([
    {
        user: "Rahul Sharma",
        totalAmount: 80000,
        status: "delivered",
        orderDate: new Date("2025-02-10")
    },
    {
        user: "Priya Singh",
        totalAmount: 3000,
        status: "pending",
        orderDate: new Date("2025-03-01")
    },
    {
        user: "Amit Verma",
        totalAmount: 15000,
        status: "cancelled",
        orderDate: new Date("2024-12-15")
    },
    {
        user: "Rahul Sharma",
        totalAmount: 4500,
        status: "delivered",
        orderDate: new Date("2025-01-20")
    },
    {
        user: "Sneha Gupta",
        totalAmount: 1200,
        status: "pending",
        orderDate: new Date("2025-03-05")
    }
])