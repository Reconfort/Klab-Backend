import express from "express";

// Create an instance of express app
const router = express.Router();

// Define a route that sends "Hello World!" as a response to the GET request
router.use("/", (req, res) => {
  res.send("Hello World!");
});

export default router;