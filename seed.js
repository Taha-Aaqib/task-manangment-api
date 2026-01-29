const mongoose = require("mongoose");
const Task = require("./models/Task");
const User = require("./models/User");

mongoose
  .connect("mongodb://127.0.0.1:27017/myAppDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

async function seed() {
  await Task.deleteMany({});
  await User.deleteMany({});

  const user1 = await User.create({
    name: "Taha Aaqib",
    email: "taha@gmail.com",
    password: "123456",
  });
  const user2 = await User.create({
    name: "Ali Khan",
    email: "ali@example.com",
    password: "password",
  });
  await Task.create([
    {
      title: "Finish homework",
      description: "Math exercises",
      completed: false,
      user: user1._id,
    },
    {
      title: "Read a book",
      description: "Read 20 pages",
      completed: true,
      user: user1._id,
    },
    {
      title: "Exercise",
      description: "30 mins cardio",
      completed: false,
      user: user2._id,
    },
  ]);

  console.log("Sample data inserted");
  mongoose.disconnect();
}

seed();
