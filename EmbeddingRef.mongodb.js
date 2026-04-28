use("test");
db.students.insertMany([
     {
          _id:1,
          name:"shivam",
          courses:[
               {
                    _id:1,
                    name:"BCA",
                    duration:3
               },
               {
                    _id:2,
                    name:"pharmacy",
                    duration:4
               }
          ]
     },
     {
          _id:2,
          name:'vishal',
          courses:[
               {
                    _id:1,
                    name:"BCA",
                    duration:3
               }
          ]
     }
])

db.students.find({'courses.name':"BCA"})

db.students.insertOne({
     _id:3,
     name:'shivam',
     address:{
          city:'kamlapur',
          state:"bagli",
          pincode:455227
     }
})

db.students.updateOne(
     {"address.city":"kamlapur"},
     {$set:{"address.city":"hatpipliya"}}
)

db.students.find()

db.courses.insertMany([
     {
          _id:1,
          name:'BCA',
          durathion:3
     },
     {
          _id:2,
          name:'pharmacy',
          durathion:4
     }
])

db.students.insertMany([
     {
          _id:4,
          name:"anand",
          courses:[1]
     },
     {
          _id:5,
          name:'tusar',
          courses:[1,2]
     }
])

db.students.find()

//! aggrigation paip line

db.students.aggregate([
     {
          $lookup: {
            from: 'courses',
            localField: 'courses',
            foreignField: '_id',
            as: 'coursesDetails'
          }
     }
])