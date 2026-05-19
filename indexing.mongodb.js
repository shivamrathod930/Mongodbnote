use("test");

db.user.createIndex({ city: 1 });

db.user.find({ city: "kamlapur" }).explain("executionStats")

db.user.dropIndex({ city: 1 })

db.user.getIndexes()


// # 1.  singal field index

db.user.createIndex({ city: 1 });

db.user.getIndexes()

db.user.find({ city: "kamlapur" }).explain("executionStats")

db.user.dropIndex({ city: 1 })

// # 2.  compound index

db.user.createIndex({ name: 1, age: 1 });

db.user.find({ name: "Shivam kumar", age: 18 }).explain("executionStats")


// # 3. 


db.products.createIndex({ tags: 1 });
db.products.getIndexes();

db.products.find({ tags: 'computer' }).explain("executionStats");



db.products.createIndex({ 'reviews.user': 1, 'reviews.rating': 1 });

db.products.find({'reviews.user':'Rahul','reviews.rating':5})



db.products.dropIndexes('reviews.user_1_reviews.rating_1')

db.products.getIndexes()


// # 4. Text index 

db.