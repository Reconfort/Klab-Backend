// Import the express and dotenv packages
import express from "express";
import dotenv from "dotenv";

const app = express();

// Import router from routes folder 
import router from "../routes/index";

// import swggerUi and swaggerJsdoc 
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

// Define the Swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Klab APIs',
      version: '1.0.0',
      description: 'API for Klab Website project',
    },
    servers: [
      {
        url: 'http://localhost:8080',
      },
    ],
  },
  apis: ['index.js'],
};


// Generate the Swagger specification
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Define the routes
/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns a greeting message
 *     responses:
 *       200:
 *         description: A greeting message is returned
 */


// Import the router and add it to the app
app.use(router);

// Load environment variables from .env file
dotenv.config();



// Start the server and listen on the specified port
app.listen(process.env.PORT, () => {
  console.log(`App is listerning to ${process.env.PORT}`);
});