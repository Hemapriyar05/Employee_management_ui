
let employees = [
  {
    id: "EMP001",
    name: "Rahul",
    email: "rahul@gmail.com",
    department: "Marketing",
    phone: "9876543210",
    dob: "2000-01-15"
  },
  {
    id: "EMP002",
    name: "Priya",
    email: "priya@gmail.com",
    department: "HR",
    phone: "9876543211",
    dob: "1999-05-20"
  },
  {
    id: "EMP003",
    name: "Amit",
    email: "amit@gmail.com",
    department: "Finance",
    phone: "9876543212",
    dob: "1998-09-10"
  },
  {
    id: "EMP004",
    name: "Raj",
    email: "raj123@gmail.com",
    department: "IT",
    phone: "9586745841",
    dob: "2006-02-07"
  },
  {
    id: "EMP005",
    name: "Ann",
    email: "ann90@gmail.com",
    department: "Marketing",
    phone: "9876456376",
    dob: "2001-07-11"
  },
  {
    id: "EMP006",
    name: "Dev",
    email: "dev123@gmail.com",
    department: "HR",
    phone: "9876788903",
    dob: "2001-05-02"
  }
];

const readEmployees = () => {
  return employees;
};

const writeEmployees = (data) => {
  employees = data;
};

module.exports = {
  readEmployees,
  writeEmployees
};
