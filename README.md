# Task Management System

A full-stack **Task Management Application** built using **Angular** and **ASP.NET Core Web API** with **SQL Server** as the database.  
The system allows **Admins to assign tasks** and **Employees to view and complete their assigned tasks**.

---

# Features

### Authentication
- User Registration (Admin / Employee)
- Login system
- Role-based access
- Secure API communication

### Admin Features
- Create tasks
- Assign tasks to employees
- Edit tasks
- Delete tasks
- View all tasks

### Employee Features
- View only assigned tasks
- Mark tasks as completed
- Track task deadlines

### Dashboard
- Total tasks
- Completed tasks
- Pending tasks
- Overdue tasks
- Visual charts using **Chart.js**

---

# Tech Stack

### Frontend
- Angular
- TypeScript
- HTML
- CSS
- Chart.js

### Backend
- ASP.NET Core Web API
- Entity Framework Core

### Database
- SQL Server

---

# Project Structure

```
task-management-system
│
├── task-management-ui
│   ├── components
│   ├── services
│   ├── models
│   ├── layout
│   └── guards
│
└── TaskManagementAPI
    ├── Controllers
    ├── Models
    ├── DTOs
    ├── Data
    └── Program.cs
```

---

# Installation Guide

## Clone the Repository

```
git clone https://github.com/12mrsky/task-management-system.git
```

---

# Backend Setup (.NET API)

Navigate to backend folder:

```
cd TaskManagementAPI/TaskManagementAPI
```

Run the backend server:

```
dotnet run
```

Backend will run at:

```
http://localhost:5086
```

---

# Frontend Setup (Angular)

Navigate to Angular project:

```
cd task-management-ui
```

Install dependencies:

```
npm install
```

Run Angular application:

```
ng serve
```

Open in browser:

```
http://localhost:4200
```

---

# Database Setup

1. Open **SQL Server Management Studio**

Create a database:

```
TaskManagementDB
```

Update the connection string in **appsettings.json**

Example:

```
"ConnectionStrings": {
 "DefaultConnection": "Server=.;Database=TaskManagementDB;Trusted_Connection=True;TrustServerCertificate=True"
}
```

---

# API Endpoints

### Authentication

```
POST /api/Auth/register
POST /api/Auth/login
GET  /api/Auth/employees
```

### Tasks

```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}
```

---

# Future Improvements

- Email notifications
- File attachments for tasks
- Task comments
- Advanced admin analytics
- Cloud deployment

---

# Author

SKY

GitHub  
https://github.com/12mrsky