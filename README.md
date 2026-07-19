# Tour Connect

Tour Connect is a Full Stack Tour Management System developed using Node.js, Express.js, MongoDB, and JavaScript. It provides a simple interface to create, view, update, and delete tour information through REST APIs and a responsive frontend.

## Features

- Create a new tour
- View all tours
- Update existing tours
- Delete tours with confirmation dialog
- Responsive frontend
- RESTful API
- Swagger API Documentation
- Logging Middleware
- Error Handling Middleware
- MongoDB Atlas Integration
- MVC Architecture

## Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Other Tools
- Swagger UI
- dotenv
- Helmet
- CORS

## Project Structure

```
tour-travel-power/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── swagger/
│
├── index.js
├── package.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/tour-travel-power.git
```

Go to the project directory:

```bash
cd tour-travel-power
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm start
```

The application will run on:

```
http://localhost:3000
```

Swagger Documentation:

```
http://localhost:3000/api-docs
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /tour | Get all tours |
| POST | /tour | Create a new tour |
| PUT | /tour/:id | Update a tour |
| DELETE | /tour/:id | Delete a tour |

## Learning Outcomes

This project helped me learn:

- REST API development
- CRUD operations
- Express.js
- MongoDB Atlas
- Mongoose
- MVC Architecture
- Swagger Documentation
- Middleware
- Error Handling
- Frontend and Backend Integration

## Author

**Shakti Burnwal**

Software Development Engineer
