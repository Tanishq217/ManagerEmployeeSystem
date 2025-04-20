# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# 🧑‍💼 Employee Management System (EMS)

A full-stack Employee Management System that provides task tracking and user role-based dashboards for employees and managers (admins). Built with React, this system is designed to manage, assign, and monitor tasks efficiently within an organization.

---

## 📋 Description

The EMS allows:
- Managers (Admins) to create and assign tasks to employees.
- Employees to view, accept, complete, or fail tasks (Which will be functional in future, as i have less time to do everything) .
- Both roles to interact with a role-based dashboard experience.
- Persistent login using local storage and a basic authentication provider.

---

## ✨ Features

- 🔐 **Authentication System**  
  - Login functionality using a custom AuthProvider.(Using Local Storage) 

- 🧑‍💻 **Role-Based Dashboards**


‼️‼️‼️


  - Admin Dashboard: Create and manage tasks.  (TO ACCESS THE ADMIN DASHBOARD , WE NEED TO USE -->
 
  - emal ->>  admin@me.com
  - passowrd ->> 123 



  - Employee Dashboard: View and update task statuses.   (TO ACCESS THE ADMIN DASHBOARD , WE NEED TO USE -->
 
  - emal ->>  name of employee(From local storaage).com > Example ->> ( Tanishq@gmail.com )
  - passowrd ->> 123



‼️‼️‼️

 

- ✅ **Task Status Management**  
  - New Tasks  
  - Accepted Tasks  
  - Completed Tasks  
  - Failed Tasks

- 📊 **Task Overview**  
  - Dynamic task number summary.
  - Filtered views of tasks based on status.

- 🌐 **Local Storage Support**  
  - Persistent user state without backend (for now).

---

## 🛠 Tech Stack

**Frontend:**  
- ⚛️ React (Functional Components & Hooks)  
- 🎨 CSS

**State Management:**  
- 🔄 Context API  
- (Optional: Jotai for future atomic state handling)

**Tooling & Others:**  
- Visual Studio Code  
- ESLint  
- PostCSS (if configured)  

---
