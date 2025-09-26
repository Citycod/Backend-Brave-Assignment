# Backend-Brave-Assignment
# 🛒 E-commerce Checkout System - Cart Service

## 📌 Overview
This project is a proof-of-concept (POC) implementation of the **Cart Service** for an e-commerce checkout system.  
The goal is to demonstrate how a monolithic checkout process can be broken down into **microservices** for scalability and maintainability.  

---

## 🏗 Architecture Proposal

The checkout system is divided into multiple microservices:

- **Auth Service** → Handles user registration, login, and authentication (JWT).  
- **Product Service** → Manages available products, their details, and inventory.  
- **Cart Service** (Implemented Here) → Manages user carts, adding and retrieving items.  
- **Order Service** → Handles order creation and confirmation.  
- **Payment Service** → Manages payments and transactions.  

### 📊 Architecture Diagram
![Microservices Architecture](https://storage.googleapis.com/pacitude-buckets/licensed-image.jpeg)

---

## 🚀 Features Implemented (Cart Service)
- `POST /add-to-cart` → Add an item to a user’s cart.  
- `GET /get-cart/:userId` → Retrieve all items in a user’s cart.  
- MongoDB used for persistence.  
- Basic authentication included (mock login/register).  

---

## 🔧 Technologies
- **Backend**: Node.js, Express.js, MongoDB, JWT  
- **Frontend**: React (Vite) / Next.js  
- **Database**: MongoDB Atlas (or local MongoDB)

---

## ⚙️ Setup Instructions

### 1. Backend (Cart Service)
```bash
# Clone repository
git clone <your-backend-repo-link>
cd checkout-cart-service

# Install dependencies
npm install

# Add .env file
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_secret_key

2. Frontend (React-Vite / Next.js)
# Clone repository
git clone <your-frontend-repo-link>
cd checkout-frontend

# Install dependencies
npm install

# Run frontend
npm run dev


Frontend runs at: http://localhost:5173

📡 API Endpoints (Cart Service)
POST /add-to-cart

Description: Add an item to user’s cart

Body:

{
  "userId": "12345",
  "productId": "67890",
  "quantity": 2
}

GET /get-cart/:userId

Description: Get all items in a user’s cart

Response Example:

[
  {
    "productId": "67890",
    "name": "Sample Product",
    "quantity": 2,
    "price": 200
  }
]

📎 Repository Links

Backend (Cart Service): checkout-cart-service
https://github.com/Citycod/Backend-Brave-Assignment.git
Frontend: checkout-frontend
https://github.com/Citycod/Frontend-brave-assignment.git
👨‍💻 Author

Name: Edudje Wisdom Marvellous

Submission for: The E-commerce Checkout System Challenge


---


# Run server
npm run dev
