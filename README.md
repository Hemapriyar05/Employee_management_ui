# Employee Management UI

A clean and responsive **Employee Management page** inspired by Meepl HRMS, built with **React.js**. It lets users view, search, add, edit and delete employees, with form validation and success messages. No backend or database is needed; all data is managed with React state.


## Features

- **Employee listing table** with ID, name, email, department and actions
- **Search employees by name** (live filtering)
- **Add Employee** through a popup form
- **Edit employee** details (the form is pre-filled)
- **Delete employee** with a confirmation prompt
- **Form validation** for required fields, email format, 10-digit phone number and date of birth
- **Success messages** after adding, updating or deleting
- Modern UI with avatar initials, colored department badges and smooth animations

## Tech Stack

React.js - UI library (functional components) 
useState - Hook  State management 
Props - Passing data between reusable components 
CSS3 - Styling and animations
Vite - Fast build tool and dev server Git & GitHub - Version control and branching workflow 


## Project Structure

employee-management-ui/
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx       
│   │   ├── EmployeeTable.jsx   
│   │   └── EmployeeForm.jsx    
│   ├── App.jsx                
│   ├── App.css                 
│   └── main.jsx                
├── index.html
├── package.json
└── README.md

##  Git Branching Strategy

main
  └── develop
        └── feature/employee-management-ui

##  Author

GitHub: [@Hemapriyar05](https://github.com/Hemapriyar05)

