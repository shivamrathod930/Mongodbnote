// todo Qusetions 

//! Level 1

// show('dbs');

// use('shopApp');

// show('dbs');

// db.createCollection('users');



//! Level 2

// use('shopApp');

// db.users.insertOne({
//      name:'Rahul',
//      email:'rahul@gmail.com',
//   age:22
// }); 

//  db.users.insertOne({
//     name:'amit',
//    email:'amit@gamil.com',
//      age:18
// });

// db.users.insertMany([
//      {
//           name:'shivam',
//           email:'shivam@gmail.com',
//           age:17
//      },
//      {
//           name:'neha',
//           email:'neha@gmail.com',
//           age:17
//      },
//      {
//           name:'sachin',
//           email:'sachin@gmail.com',
//           age:21
//      }
// ]);


// db.users.find({city:'bhaglpur'});


//! Level 3

// show('dbs');

// use('ecommerce');

// db.createCollection('products');

// db.products.insertMany([
//      {
//           name:"iphone",
//           price:80000,
//           category:'electronics',
//           stock:10
//      },
//      {
//           name:"Laptop",
//           price:60000,
//           category:'electronics',
//           stock:20
//      },
//      {
//           name:"shoes",
//           price:800,
//           category:'fashion',
//           stock:14
//      },
// ]);

// db.products.find();

// db.products.find({category:"electronics"})

// ? count document ya users in the dbs 

// * db.products.countDocuments();


// ! Level 4


// use("shopApp");

// db.users.updateMany({city:"bhagalpur"},{$set: {city:'mumbai'}});

// use("ecommerce");

// db.products.updateOne(
//      { name: "Laptop" },
//      { $set: { price: 40000 } }
// );

// db.products.updateMany(
//      {},
//      { $set: { stack: 20 } }
// )

//* important incriment by 20 10 25


// ? db.products.updateMany(
//?   { name: 'Laptop' },
//?     { $inc: { stack: 20 } }
//? );


// use("shopApp");

// db.users.updateOne(
//      { email: 'neha@gmail.com' },
//      { $set: { email: 'neharathod@gmail.com' } }
// )

// ! Level 5

// use('shpApp');

// db.users.deleteOne({name:"Amit"});

// todo > 18 vale ko delete kese kare

// * db.users.deleteMany({ age: { $lt: 18 } })

// use("ecommerce");

// db.products.deleteOne({});

// ! Level 6

// use("shopApp");

// db.users.find({ age: { $gt: 20 } })

// use("ecommerce")

// db.products.find({ price: { $lt: 5000 } });


// db.users.find({ name: "Rahul" });

// db.users.countDocuments({city:'Mumbai'});

// show("collection");


// ! instagram mini clone 

// use("instagramClone");

// db.createCollection("users");
// db.createCollection("post");


// db.users.insertOne({
//      name:"shivam",
//      followers:120,
//      city:"dhingarkheda"
// })

// db.post.insertOne({
//      name:'shivam',
//      caption:'coding',
//      likes:20
// });

// db.post.updateOne(
//      { name: "shivam" },
//      { $set: { caption: "CODING" } }
// )

// db.post.deleteOne({name:"shivam"});

// db.post.find();