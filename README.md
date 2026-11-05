# Employee Management UI

A simple Employee Management page inspired by Meepl HRMS, built with React.

## Features
- View employees in a table
- Search employees by name
- Add, edit and delete employees
- Form validation for required fields
- Success message after adding an employee

## Tech Stack
React.js (functional components, useState, props), CSS, Vite

## Getting Started
git clone https://github.com/<your-username>/employee-management-ui.git
cd employee-management-ui
npm install
npm run dev

## Project Structure
src/components/ → SearchBar, EmployeeTable, EmployeeForm
src/App.jsx → main page and state management

## Branching Strategy
- main: stable code
- develop: development code
- feature/employee-management-ui: working branch

## Note
No backend or database. Data is stored in React state and resets on refresh.