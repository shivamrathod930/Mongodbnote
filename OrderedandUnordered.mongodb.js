//! ordered and unodered consept

//? multiple insert karte waqt agar beech me error aaye to mongoDB kiya kareg ?


use("school4u")

db.createCollection("users");

//? this is the syntex of the orderd and unordered and the mongodb are the default way of insert is ordered me mongodb default main ordered main insert karta hain and unoredered main insert karne ke liye oredered ko false karnapadta hain like this the examplay of below.

db.users.insertMany([
     { _id: 1, name: 'shivam' },
     { _id: 2, name: 'neha' },
     { _id: 1, name: 'kripa' },
     { _id: 3, name: 'aayush' },
     { _id: 4, name: 'krishnpal' },
     { _id: 5, name: 'Mkl' },
], { ordered: false });
