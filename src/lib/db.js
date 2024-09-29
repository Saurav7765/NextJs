require('dotenv').config();
const mongoose = require('mongoose');
const { name, password } = process.env;

// Construct the connection string
export const connectionSrt = `mongodb+srv://${name}:${encodeURIComponent(password)}@cluster0.3e4de.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
// mongoose.connect(connectionSrt)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Connection error:", err));
