# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# mern-infrastructure-vite


Wire Frames /And Graph
www.canva.com/design/DAF6KYMC3tQ/4RDswvAN4Vw5gZNa3QhGxQ/view?utm_content=DAF6KYMC3tQ&utm_campaign=designshare&utm_medium=link&utm_source=editor

---

# Personal Budget Manager

This is a full-stack web application designed for personal budget management. It allows users to track their income and expenses, providing insights into their financial health. The project is built using the MERN stack (MongoDB, Express.js, React, Node.js) and features user authentication, transaction management, and a dashboard for financial overview.

## Features

- User registration and login functionality.
- Add, edit, and delete financial transactions.
- View a summary of expenses and income.
- Responsive design for various screen sizes.

## Technologies Used

- **Frontend:** React, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Other Tools:** bcrypt for password hashing, ESLint for code linting

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MongoDB installed locally or a MongoDB Atlas account.

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/SWMakeAnImpact/FinalMernStackProject
   cd FinalMernStackProject
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory with the following contents:
   ```
   DB_URI=mongodb://localhost:27017/personalBudgetManager
   JWT_SECRET=your_jwt_secret
   PORT=3001
   ```
   Replace `your_jwt_secret` with a secure, random string.

### Running the Application

1. **Start the Backend Server:**
   ```bash
   npm start
   ```

2. **Access the Application:**
   Open `http://localhost:3001` in your web browser to access the application.

Using the Application

- Register for a new account using the sign-up feature.
- Log in to access the dashboard.
- Add, update, and delete your income and expense transactions.
- View a summarized dashboard of your financial activities.

 Contributing

Feel free to fork this repository and contribute. Please create a pull request for any changes.


