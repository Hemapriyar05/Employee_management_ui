# Employee Management System

A full-stack Employee Management application inspired by Meepl HRMS. The React frontend communicates with a Node.js and Express REST API to view, search, add, edit and delete employee records. Data is stored in a local JSON file, so no database setup is required.


## Features

- View all employees in a responsive table
- Search employees by name with live filtering
- Add a new employee through a validated form
- Edit existing employee details using the same reusable form
- Delete an employee with a confirmation prompt
- Automatic employee ID generation (EMP001, EMP002, and so on)
- Success and error messages for every operation
- Loading state while data is fetched from the API
- Mobile responsive layout, with table rows displayed as cards on small screens
- RESTful API with separate routes and controllers
- Persistent storage in a local JSON file

## Tech Stack

 Frontend - React 19, Vite, CSS3 
 React concepts - Functional components, useState, useEffect, props, reusable components 
 Backend - Node.js, Express 
 Middleware - cors, express.json 
 Storage - Local JSON file (no database) 
 Tooling - ESLint, nodemon 
 Version control - Git and GitHub 
 Hosting - Vercel 


## Project Structure

Employee_management_ui/
├── backend/
│   ├── data/
│   │   └── employees.json          
│   ├── src/
│   │   ├── controllers/
│   │   │   └── employeeController.js 
│   │   ├── routes/
│   │   │   └── employeeRoutes.js    
│   │   └── utils/
│   │       └── fileHelper.js        
│   ├── server.js                     
│   └── package.json
├── public/
├── screenshots/
├── src/
│   ├── components/
│   │   ├── EmployeeForm.jsx         
│   │   ├── EmployeeTable.jsx         
│   │   └── SearchBar.jsx           
│   ├── services/
│   │   └── employeeService.js       
│   ├── App.jsx                       
│   ├── App.css                      
│   └── main.jsx                      
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js

## Getting Started

### Prerequisites

- Node.js version 18 or higher
- npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Hemapriyar05/Employee_management_ui.git
cd Employee_management_ui

# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

### Running the Application

Two terminals are required: one for the backend and one for the frontend.

**Terminal 1: Backend (http://localhost:5000)**
```bash
cd backend
npm run dev
```

**Terminal 2: Frontend (http://localhost:5173)**
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Running the Built Application from the Backend

The Express server can also serve the production build of the frontend, so the whole application runs from a single port.

## Deployment

The frontend and backend are deployed as two separate Vercel projects from the same repository.

### Backend

1. Create a new Vercel project from this repository.
2. Set **Root Directory** to `backend`. Vercel detects Express automatically.
3. Deploy and verify `https://<api-project>.vercel.app/api/employees`.

### Frontend

1. Create a Vercel project from this repository with the default settings (Vite is detected automatically).
2. Add the environment variable `VITE_API_URL` with the value `https://<api-project>.vercel.app/api/employees`.
3. Redeploy so the variable is included in the build.

Every merge into `main` triggers a new production deployment for the affected project.

## Git Workflow

### Branch Structure

```
main
  └── develop
        └── feature/*
```

 `main` - Stable, production-ready code 
 `develop` - Integration branch for completed features 
 `feature/employee-management-ui` - Frontend development 
 `feature/backend-api` - Backend API and frontend integration 

Feature branches are merged into `develop` through pull requests, and `develop` is merged into `main` once tested.

## Author
GitHub: [Hemapriyar05](https://github.com/Hemapriyar05)
