//! cursor conccept

use("school4u");

// let arr =[]

// for (let i=0; i <= 100; i++) {
//      arr.push({value:i})
// }

// db.data.insertMany(arr);


// const cursor = db.data.find();

// console.log(cursor);

// console.log(cursor.next())

// while (cursor.hasNext()) {
//      console.log(cursor.next());
// }

//! cursor methods and command 

//? 1. next() = Next document fetch karta hain.
//? 2. hasNext() = Check karta hain aur documents bache hain ya nahi.
//? 3. limit() = kitne documents chahiye.
//? 4. skip() = Documents ko skip karta hain.
//? 5. short() = Documents ko sort karta hain.

//* limit 

// db.data.find().limit(40)

//* short
//? 1 asending order me sort 

// db.data.find().sort({value:1})

//? -1 desending order me sort 
// db.data.find().sort({value:-1})

//* skip

//? starting ke document ko skip karta hai 

// db.data.find().skip(5)

//! cursor chain 
//? pahle ka out put dusre ka input hota hai 

// db.data.find().sort({value:-1}).skip().limit(20)

//? pagenation

// const pg = 1;
// const lm = 10;

// const data = db.data.find().skip((pg-1)*lm).limit(lm)

// console.log(data)
