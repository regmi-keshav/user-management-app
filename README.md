# User Management Web Application

## Overview

This project is a user management web application built with Node.js, Express.js, MongoDB, and Bootstrap. It provides functionalities to register users, log in, view, update, and delete users. JWT (JSON Web Token) is used for authentication to secure API routes.

## Features

- **User Registration**: Allows users to create an account with encrypted passwords.
- **User Login**: Users can log in and receive a JWT token for authenticated access.
- **User List**: View all registered users.
- **User Update**: Update user details such as name, phone number, and profession.
- **User Deletion**: Delete a user from the system.
- **Responsive Design**: Built with Bootstrap for a responsive and user-friendly interface.
- **JWT Authentication**: Secures routes and ensures only authenticated users can access protected resources.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side code.
- **Express.js**: Web framework for building the REST API.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken (JWT)**: Library for generating and verifying JSON Web Tokens.
- **Bootstrap**: Frontend framework for responsive design.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/regmi-keshav/user-management-app.git
   cd user-management-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   MONGO_URI=mongodb://localhost:27017/user_management
   JWT_SECRET=your_jwt_secret_key
   ```

   Replace `your_jwt_secret_key` with a secure secret key.

4. **Run the Application**

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:5000`.

## API Endpoints

### Authentication

#### **1. POST `/api/auth/register`**

- **Description**: Registers a new user with name, email, password, phone, and profession.
- **Method**: POST
- **Access**: Public
- **Expected Response**: Returns a JWT token.

**Testing in Postman**:

- **URL**: `http://localhost:5000/api/auth/register`
- **Method**: POST
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "1234567890",
    "profession": "Developer"
  }
  ```
- **Expected Status Code**: 201 Created
- **Response Example**:
  ```json
  {
    "token": "<JWT_token_here>"
  }
  ```

#### **2. POST `/api/auth/login`**

- **Description**: Authenticates a user and returns a JWT token.
- **Method**: POST
- **Access**: Public
- **Expected Response**: Returns a JWT token.

**Testing in Postman**:

- **URL**: `http://localhost:5000/api/auth/login`
- **Method**: POST
- **Headers**: `Content-Type: application/json`
- **Body** (raw JSON):
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Expected Status Code**: 200 OK
- **Response Example**:
  ```json
  {
    "token": "<JWT_token_here>"
  }
  ```

### User

#### **3. GET `/api/users`**

- **Description**: Fetches all registered users, excluding their passwords.
- **Method**: GET
- **Access**: Private (Requires JWT token)
- **Expected Response**: Returns an array of user objects.

**Testing in Postman**:

- **URL**: `http://localhost:5000/api/users`
- **Method**: GET
- **Headers**:
  - `x-auth-token`: `<JWT_token_here>`
- **Expected Status Code**: 200 OK
- **Response Example**:
  ```json
  [
    {
      "_id": "61234abcde",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "profession": "Developer"
    },
    ...
  ]
  ```

#### **4. PUT `/api/users/:id`**

- **Description**: Updates the user information (name, phone, profession) for a specific user.
- **Method**: PUT
- **Access**: Private (Requires JWT token)
- **Expected Response**: Returns the updated user object.

**Testing in Postman**:

- **URL**: `http://localhost:5000/api/users/<user_id>`
- **Method**: PUT
- **Headers**:
  - `x-auth-token`: `<JWT_token_here>`
  - `Content-Type: application/json`
- **Body** (raw JSON):
  ```json
  {
    "name": "John Smith",
    "phone": "1112223333",
    "profession": "Engineer"
  }
  ```
- **Expected Status Code**: 200 OK
- **Response Example**:
  ```json
  {
    "_id": "61234abcde",
    "name": "John Smith",
    "email": "john@example.com",
    "phone": "1112223333",
    "profession": "Engineer"
  }
  ```

#### **5. DELETE `/api/users/:id`**

- **Description**: Deletes a user by their ID.
- **Method**: DELETE
- **Access**: Private (Requires JWT token)
- **Expected Response**: Returns a success message.

**Testing in Postman**:

- **URL**: `http://localhost:5000/api/users/<user_id>`
- **Method**: DELETE
- **Headers**:
  - `x-auth-token`: `<JWT_token_here>`
- **Expected Status Code**: 200 OK
- **Response Example**:
  ```json
  {
    "msg": "User removed"
  }
  ```

## Frontend

### Pages

- **Registration Page (`/register.html`)**
  - Allows users to register a new account.
- **Login Page (`/login.html`)**

  - Allows users to log in and receive a JWT token.

- **Home Page (`/index.html`)**
  - Displays the list of registered users.
  - Provides options to edit or delete users.

## Running the Application

1. Start the MongoDB server if it's not already running.
2. Run the application using `npm start`.
3. Access the application via `http://localhost:5000`.

### **Testing Flow Summary:**

1. **Register a User** using the POST `/api/auth/register` endpoint.
2. **Log in** using the POST `/api/auth/login` endpoint to receive a JWT token.
3. **Use the JWT token** to access the protected routes:
   - Get the list of users with GET `/api/users`.
   - Update a user with PUT `/api/users/:id`.
   - Delete a user with DELETE `/api/users/:id`.

## Troubleshooting

- **JWT Authentication Errors**: Ensure the JWT secret key in `.env` matches the one used in the code.
- **MongoDB Connection Issues**: Verify the MongoDB URI in `.env` and ensure the MongoDB server is running.

### Project Directory Overview:

```plaintext
/user-management-app
├── config
│   └── db.js
├── middleware
│   └── auth.js
├── models
│   └── User.js
├── public
│   └── styles.css
├── routes
│   ├── auth.js
│   ├── users.js
├── views
│   ├── index.html
│   ├── login.html
│   └── register.html
├── app.js
├── .env
├── package.json
└── README.md
```
