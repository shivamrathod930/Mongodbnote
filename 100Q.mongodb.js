//! lavel 1

const { text } = require("express");

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
     age: { $type: "number" }
})

//! q 24

db.user.find({
     age: { $mod: [2, 0] }
})

//! q 25

db.user.find({
     $expr: {
          $gt: [
               { $strLenCP: '$name' },
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
     price: { $gt: 1000 }
})
//! q 27 

db.products.find({
     price: { $gt: 500, $lt: 2000 }
})

//! q 28

db.products.find({
     category: 'electronics'
})
//! q 29

db.products.find({
     stock: { $lt: 10 }
})


//! q 30

db.products.find({
     stock: 0
})

//! q 31

db.products.find().sort({ price: 1 })

//! q32 

db.products.find().sort({ price: -1 }).limit(5)


//! q 34 

db.products.find({
     name: /phone/
})

//! q35 

db.products.find({
     discount: { $gt: 24 }
})

//! q 36

db.products.find({
     category: { $ne: 'electronics' }
})


//! q 37

db.products.find({
     tags: 'gaming'
})
db.products.find({
     tags: { $in: ['gaming'] }
})

//! q 38

db.products.find({
     tags: { $all: ['gaming', 'laptop'] }
})

//! q 39

db.products.find({
     tags: { $size: 3 }
})

//! q 40

db.products.updateOne(
     { name: 'Gaming Laptop' },
     { $push: { tags: 'new' } }
)

//! q 41

db.products.updateOne(
     { name: 'Gaming Laptop' },
     { $pull: { tags: 'new' } }
)

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

//! q 42

db.orders.find({
     user: /Rahul/
})

//! q 43 

db.orders.find({
     totalAmount: { $gt: 5000 }
})

//! q 44
//? this is for new 

db.orders.find({
     orderDate: { $gt: new Date('2025-01-01') }
})

//! q 45

db.orders.find({
     status: 'delivered'
})

//! q 46

db.orders.find({
     status: { $ne: 'cancelled' }
});

//! q 47
//? this is the most importent quetion in this 100 quetion serias 
db.products.updateMany(
     {},
     { $mul: { price: 1.1 } }
);


//! q 48

db.products.updateMany(
     {},
     { $inc: { stack: 50 } }
)

//! q 49

db.products.updateMany(
     {},
     { $rename: { price: 'productprice' } }
)

//! q 50

db.products.updateMany(
     {},
     { $unset: { discount: 0 } }
)

//! q 51 

db.products.updateMany(
     {},
     { $set: { featured: true } }
)

//! q 52


db.products.deleteMany({ stock: 0 })

//! q 53

db.user.updateMany(
     {},
     {
          $set: {
               orders: [],
               wishlist: [],
               card: []
          }
     }
)

db.user.updateOne(
     { name: 'Rahul Sharma' },
     { $pull: { orders: { id: 101 } } }
);

db.user.deleteOne(
     { orders: { $size: 0 } },
)

//! q 54
//? yah bhi importent quetion hain.

db.orders.deleteMany(
     { orderDate: { $lt: new Date(new Date().setFullYear(new Date().getFullYear() - 5)) } }
)


//* sempal data


db.blogs.insertMany([
     {
          title: "MongoDB Basics",
          views: 120,
          comments: [
               { user: "Rahul", text: "Great tutorial" },
               { user: "Amit", text: "Very helpful" }
          ]
     },
     {
          title: "JavaScript Async Guide",
          views: 300,
          comments: [
               { user: "Priya", text: "Awesome explanation" }
          ]
     },
     {
          title: "Node.js Performance Tips",
          views: 80,
          comments: []
     }
])


//! q 55

db.blogs.updateMany(
     {},
     { $inc: { views: 1 } }
)

db.blogs.find()

//! q 56 

db.blogs.updateOne(
     { title: 'JavaScript Async Guide' },
     { $push: { comments: { user: 'priyenka', text: 'hello i am priyenka' } } }
)

//! q 57

db.blogs.updateOne(
     { title: 'MongoDB Basics' },
     { $pull: { comments: { user: 'Amit' } } }
)

//! q 58

db.users.updateOne(
     { name: 'Amit Verma' },
     { $push: { wishlist: { id: 101 } } }
)

//! q 59 

db.users.updateOne(
     { name: 'Amit Verma' },
     { $pull: { wishlist: { id: 101 } } }
)

//! q 60

db.users.updateOne(
     {},
     { $push: { card: { id: 102 } } }
)

//! q 61

// todo Advance 

//* sempal data 


db.products.insertMany([
     {
          name: "Gaming Laptop",
          price: 85000,
          category: "electronics",
          stock: 8,
          discount: 15,
          tags: ["gaming", "laptop", "electronics"],
          reviews: [
               { user: "Rahul", rating: 5 },
               { user: "Amit", rating: 4 },
               { user: "Priya", rating: 5 }
          ]
     },
     {
          name: "Office Laptop",
          price: 55000,
          category: "electronics",
          stock: 12,
          discount: 10,
          tags: ["laptop", "office", "electronics"],
          reviews: [
               { user: "Rahul", rating: 3 },
               { user: "Sneha", rating: 4 }
          ]
     },
     {
          name: "Gaming Mouse",
          price: 1500,
          category: "accessories",
          stock: 30,
          discount: 8,
          tags: ["gaming", "mouse", "computer"],
          reviews: [
               { user: "Amit", rating: 5 },
               { user: "Rahul", rating: 4 }
          ]
     },
     {
          name: "Mechanical Keyboard",
          price: 4000,
          category: "accessories",
          stock: 20,
          discount: 12,
          tags: ["keyboard", "gaming", "computer"],
          reviews: [
               { user: "Priya", rating: 5 },
               { user: "Rahul", rating: 4 }
          ]
     },
     {
          name: "LED Monitor",
          price: 12000,
          category: "electronics",
          stock: 0,
          discount: 20,
          tags: ["monitor", "display", "electronics"],
          reviews: []
     }
])



db.products.updateMany(
     {
          $expr: {
               $lt: [{ $size: '$reviews' }, 5]
          }
     },
     {
          $push: {
               reviews: {
                    user: 'rathod',
                    rating: 20,
               }
          }
     }
)

use('products')
db.products.find()

//! q 61 


db.products.find({
     'reviews.user': 'Rahul'
});

//! q62 

db.products.find({
     reviews: {
          $elemMatch: {
               user: "Rahul",
               rating: 5
          }
     }
})

//! q63

db.products.find({
     'reviews.rating': { $gte: 4 }
})

//! q 64

db.products.find({
     reviews: {
          $elemMatch: { rating: { $gte: 4 } }
     }
})

//! q 65

db.products.find(
     {
          $expr: {
               $gt: [{ $size: '$reviews' }, 5]
          }
     }
)

//! q 66 

db.products.find(
     { price: { $gt: 5000 }, stock: { $lt: 10 } }
)

//! q 67

db.products.find({
     discount: { $gt: 10, $lt: 30 }
})

//! q 68

db.products.find({
     name: /^G/
})

//! q 69

db.products.find({
     name: /Laptop$/
});

//! q 70

db.products.find({
     tags: 'gaming'
})

//! q 71

//! q 72 ripitetive hain 

//! q73

db.products.find({
     stock: { $mod: [2, 0] }
})

//! q 74

db.products.find({
     $expr: {
          $gt: [{ $strLenCP: '$name' }, 10]
     }
})

//! q 75 

db.products.find({
     discount: { $exists: true }
});

//! q 76

db.products.updateOne(
     {},
     {
          $push: {
               reviews: {
                    user: 'shivam',
                    rating: 4
               }
          }
     }
)

//! q 77

db.products.updateOne(
     { 'reviews.user': 'Rahul' },
     { $set: { 'reviews.$.rating': 1 } }
)

//! q 78


db.products.updateOne(
     { name: 'Gaming Laptop' },
     { $pull: { 'reviews.user': 'Amit' } }
)

// or 

db.products.updateOne(
     { name: 'Gaming Laptop' },
     {
          $pull: {
               reviews: {
                    user: 'Amit'
               }
          }
     }
)

//! q 79
//? new opretors 

db.products.updateOne(
     { name: 'Gaming Laptop' },
     {
          $push: {
               tags: {
                    $each: ['pc', 'setup']
               }
          }
     }
)


//! q 80

db.products.updateOne(
     { name: 'Gaming Laptop ' },
     {
          $pull: {
               tags: 'gaming'
          }
     }
)

//! q 81 
//? new opretors 
db.products.updateOne(
     { name: 'Gaming Laptop' },
     {
          $pull: {
               tags: {
                    $in: ['pc', 'setup']
               }
          }
     }
)

//! q 82 
//! q 83 

//! q 84

db.products.find({
     reviews: {
          $not: {
               $elemMatch: {
                    rating: { $lt: 4 }
               }
          }
     },
     'reviews.0': { $exists: true }
})

//! q 85 

//! q 86

db.products.find({
     reviews: {
          $elemMatch: {
               user: 'Rahul',
               rating: { $lt: 3 }
          }
     }
})

//! q 87 

db.products.find().sort({ stock: -1 }).limit(1)

//! q 88


db.products.updateMany(
     { discount: { $gt: 20 } },
     { $push: { tags: 'sale' } }
)

//! q 89 

db.products.updateMany(
     {
          $expr: {
               $lt: [{ $size: '$reviews' }, 5]
          }
     },
     {
          $push: {
               reviews: {
                    user: 'rathod',
                    rating: 20,
               }
          }
     }
)

use('products')
db.products.find()

//! q 90


db.products.find({
     $expr: {
          $gt: ['$price', '$stock']
     }
})

//! q 91

db.products.find({
     $or: [
          { discount: { $exists: false } },
          { discount: 0 }
     ]
})

//! q 92 

db.products.find({
     $expr: {
          $gt: [{ $strLenCP: '$name' }, { $strLenCP: '$category' }]
     }
})

//! q 93 


db.products.find({
     price: { $gt: 10000, $lt: 40000 },
     stock: 0
})

//! q 94 

db.user.find({
     wishlist: { $size: 0 }
})

//! q 95 
//! q 96 

db.products.find({
     stock: { $gt: 5, $lt: 20, $ne: 10 }
})

//! q97 


db.products.find({
     $or: [
          { discount: { $gt: 20 } },
          { stock: { $lt: 5 } }
     ]
})

//! q 98 

db.products.find({
     $and: [
          { tags: 'gaming', },
         { tags: { $nin: ['mobile'] } }
     ]

})

//! q 99

db.products.find({
     $expr:{
          $and:[
               {$gt:[{$size:'$reviews'},2]},
                {$lt:[{$size:'$reviews'},5]}
          ]
     }
})


//! q100


db.products.find({
     reviews:{
          $not:{
               $elemMatch:{
                    rating:{$lt:3}
               }
          }
     }
})







db.products.insertMany([
     {
          name: "Gaming Laptop",
          price: 85000,
          category: "electronics",
          stock: 8,
          discount: 15,
          tags: ["gaming", "laptop", "electronics"],
          reviews: [
               { user: "Rahul", rating: 5 },
               { user: "Amit", rating: 4 },
               { user: "Priya", rating: 5 }
          ]
     },
     {
          name: "Office Laptop",
          price: 55000,
          category: "electronics",
          stock: 12,
          discount: 10,
          tags: ["laptop", "office", "electronics"],
          reviews: [
               { user: "Rahul", rating: 3 },
               { user: "Sneha", rating: 4 }
          ]
     },
     {
          name: "Gaming Mouse",
          price: 1500,
          category: "accessories",
          stock: 30,
          discount: 8,
          tags: ["gaming", "mouse", "computer"],
          reviews: [
               { user: "Amit", rating: 5 },
               { user: "Rahul", rating: 4 }
          ]
     },
     {
          name: "Mechanical Keyboard",
          price: 4000,
          category: "accessories",
          stock: 20,
          discount: 12,
          tags: ["keyboard", "gaming", "computer"],
          reviews: [
               { user: "Priya", rating: 5 },
               { user: "Rahul", rating: 4 }
          ]
     },
     {
          name: "LED Monitor",
          price: 12000,
          category: "electronics",
          stock: 0,
          discount: 20,
          tags: ["monitor", "display", "electronics"],
          reviews: []
     }
])



db.products.updateMany(
     {
          $expr: {
               $lt: [{ $size: '$reviews' }, 5]
          }
     },
     {
          $push: {
               reviews: {
                    user: 'rathod',
                    rating: 20,
               }
          }
     }
)

use('products')
db.products.find()