const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product"); // Import your Product model
const User = require("./models/User"); // Import your User model
const products = require("./data/products"); // Import your product data
const Cart = require("./models/Cart");

dotenv.config(); // Load environment variables

// Connect to the database
mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    // Delete any existing products and users
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    // Create an admin user
    const createUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    const userID = createUser._id;

    // Map through the products and change 'collections' to 'collectionName'
    const sampleProducts = products.map((product) => {
      // Rename 'collections' field to 'collectionName'
      if (product.collections) {
        product.collectionName = product.collections;
        delete product.collections; // Delete the old field
      }

      // Add the userID to each product
      return { ...product, user: userID };
    });

    // Insert all the products into the database
    await Product.insertMany(sampleProducts);

    console.log("Product data seeded successfully!");
    process.exit(); // Exit the process once seeding is complete
  } catch (error) {
    console.error("Error seeding the data:", error); // Log any errors
  }
};

// Call the seedData function to start the seeding
seedData();
