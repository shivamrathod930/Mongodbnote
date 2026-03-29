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