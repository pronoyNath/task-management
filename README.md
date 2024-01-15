# Task Management System

## Live Link

Visit the live version of the Task Management System: [Task Management System Live](https://task-management-c3da2.web.app)

## Overview

This is a task management system built with React.js, providing a responsive design and user-friendly functionalities. The application allows users to efficiently manage tasks with features like task creation, drag-and-drop functionality, and user authentication.

## Features

- **Responsive Design:** Ensures a seamless experience across devices – phones, tablets, and PCs.
- **Landing Page:**
  - Simple navbar with clickable routes.
  - "Let’s Explore" button redirects to the login page.
  - After login, users access the task management dashboard.

- **Task Management Dashboard:**
  - Users can create new tasks with titles, descriptions, deadlines, and priority levels.
  - Drag-and-drop functionality for organizing tasks into to-do, ongoing, and completed lists.
  - React hook form for task creation.
  - Users can delete tasks.
  - User profiles with profile pictures and personal task details.

- **User Authentication:**
  - Login, register, and logout functionalities.
  - Google sign-in and another login system implemented.
  - Only logged-in users can access the task management dashboard.

- **Additional Features:**
  - Notifications using toast notifications for task assignments, updates, and deadlines.
  - Optional: Animation library (Framer Motion / Spring.js / AOS).

- **Bonus Feature:**
  - Task editing functionality for users to edit and save task details.

## Usage

1. Clone the repository.
   ```bash
   git clone https://github.com/your-username/task-management-system.git

2. cd task-management-system
3. npm install
4. npm run dev