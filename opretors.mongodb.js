
//!  comparision opretors 

//* opretors 

//? $eq = equal
//? $ne = not equal
//? $gt = greater than
//? $lt = less than
//? $gte = greater than or equal
//? $lte = less than or equal


// todo code 

// use("school4u");
// db.opretors.find(
//      {
//           price:{$lte:12.99}
//      },
//      { title: 1, category: 1, price: 1 }
// );


//! logical opretors 


//? $and = all conditions must be true 


//? $or = any condition can be true 


//? $not = Negates a condition 

//? $nor = all condition must be false

// todo code 

// use("school4u")

// db.opretors.find(
//      {
//           $and: [
//                { category: "beauty" },
//                {
//                     price: { $gt: 12.99 }
//                }
//           ]
//      },
//      {
//           title: 1,
//           category: 1,
//           price: 1
//      }
// );

//* or opretor 

// db.opretors.find(
//      {
//           $or: [
//                { category: "beauty" },
//                {
//                     price: { $gt: 12.99 }
//                }
//           ]
//      },
//      {
//           title: 1,
//           category: 1,
//           price: 1
//      }
// );

//! element opretors 

//? $exist = checks if a fiald exist 


//? $type = checks the BSON data type of a field 

//? example = db.users.find({phone :{$exist:true }});
//? example = db.users.find({age:{$type:"string"}});

// todo code 

// use("myusers");

// db.createCollection("users");

// db.users.insertMany([
//      {name:"shivam",age:21},
//      {name:"neha"},
//      {name:"kripa",age:20},
//      {name:"simran",age:19},
//      {age:25},
//      {name:"ashis"},
//      {name:"vihal"},
//      {name:"shivani",age:'14'},
//      {name:"shivam",age:21},
//      {name:"neha"},
//      {name:"kripa",age:20},
//      {name:"simran",age:19},
//      {age:25},
//      {name:"ashis"},
//      {name:"vihal"},
//      {name:"shivani",age:'14'},
// ]);

// db.users.find({age:{$exists:true}});

// db.users.find({age:{$type:"string"}})

//! evaluation operators

//? $regex = pattern matching for strings
//? $expr =  use aggregation expresion in queries
//? $mod = prefrom modulo opration

//* Example = db.user.find.({name:{$regex:"^A"}})
//* Example = db.user.find.({name:{$mod:[5,0]}})


// use("employes");

// db.createCollection("employee");

// db.employee.insertMany([
//      {
//           name: "Neha",
//           salary: 50000,
//           bouns: 1000
//      },
//      {
//           name: "priya",
//           salary: 60000,
//           bouns: 5000
//      }, {
//           name: "Sachin",
//           salary: 100000,
//           bouns: 5000
//      }, {
//           name: "Amit",
//           salary: 10000,
//           bouns: 1000
//      }, {
//           name: " Rahul",
//           salary: 10000,
//           bouns: 2000
//      },

// ])

// db.employee.find({
//      $expr:{
//           $gt:["$salary","$bouns"]
//      }
// })

// db.employee.find({name:{$regex:"a$"}})

// db.number.insertMany([
//      {value:10},
//      {value:20},
//      {value:13},
//      {value:15},
//      {value:133},
//      {value:110},
//      {value:134},
//      {value:144},
// ]);

// db.number.find({
//      value:{$mod:[10,0]}
// })


//! Array opretors

//? $all = mutch array containning all element 
//? $size = mutch array with specific length 
//? $elemMatch = match document inside arrays
//? $in = chek if array contain any value 
//? $nin = opposite of $in 

//* exampale = db.posts.find({$size:3});
//* exampale = db.posts.find({tags:{$all:['mongodb','database']}});


// use("post");

// db.Allstudents.insertMany([
//      {
//           name:'Rahul',
//           skill:['HTML','CSS','javascript'],
//           marks:[70,40,60]
//      },
//      {
//           name:'sandeep',
//           skill:['HAP'],
//           marks:[90,50,10]
//      },
//      {
//           name:'Priya',
//           skill:['homedecoretor'],
//           marks:[90,92,95]
//      },
//      {
//           name:'Amit',
//           skill:['devops','HTML','CSS','python'],
//           marks:[80,85,90,95]
//      },
//      {
//           name:'Ankita',
//           skill:['javascript','express.js','node.js','mongodb'],
//           marks:[95,30,50,60]
//      },
// ])


// db.Allstudents.find({
//      skill:{$all:['HTML','CSS']}
// })

// db.Allstudents.find({
//      skill:{$all:["javascript",'node.js','express.js']}
// })

// db.Allstudents.find({
//      skill:{$size:3}
// })

// db.Allstudents.find({
//      skill:{$in:['javascript','node.js','express.js']}
// })

// db.Allstudents.find({
//      skill:{$nin:['javascript']}
// })

// db.products.insertMany([
//      {
//           name:"Laptop",
//           reviews:[
//                {user:'Amit',rating:5}
//           ]
//      },
//      {
//           name:"mobile",
//           reviews:[
//                {user:'Amit',rating:5},
//           ]
//      },
// ])

// //! wrong


// db.products.find({
//      'reviews.user': "Amit",
//      "reviews.rating": 5
// })


//? sahi 

// db.products.find({
//      reviews:{
//           $elemMatch:{
//                user:'Amit',
//                rating:5
//           }
//      }
// })

//! update oprretor 

//? $set = update field value 
//? $unset = remove field 
//? $inc = increase numeric value 
//? $mul = Number ko multiply karta hain 
//? $rename = change field name 
//? $ min = field ko minimum value se update karte hain.
//? $max = fiels ko maxmimum value se update karta hain.

//! Array update opretors 

//? $push = Add element in Array 
//? $addToSet = duplicate allow nahi karta
//? $pull = element remove karta hain  

// todo Exampal

// db.products.updateOne({name:'Laptop',{$in:{stok:10}}})

//* code 

