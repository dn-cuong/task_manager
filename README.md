# Task Manager Project

## Overview
This project is a task management application built using Docker. It consists of a backend service and a frontend service, both containerized for easy deployment and development. The application allows users to create, update, and manage tasks efficiently.

## Features
- **Task Creation**: Users can create new tasks with descriptions and due dates.
- **Task Management**: Tasks can be updated, marked as complete, or deleted.
- **User Authentication**: Secure user authentication and authorization.
- **Responsive Design**: The frontend is designed to be responsive and user-friendly.

## Services
- **Backend**: 
  - Runs on port 8000.
  - Built with [Backend Technology] (e.g., Node.js, Django, etc.).
  - Provides RESTful API endpoints for task management.

- **Frontend**: 
  - Runs on port 5173.
  - Built with [Frontend Technology] (e.g., React, Vue.js, etc.).
  - Communicates with the backend to manage tasks.

## Prerequisites
- Docker and Docker Compose installed on your machine.
- Git for cloning the repository.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd task_manager
   ```

2. **Build and run the services**:
   ```bash
   docker-compose up
   ```

3. **Access the application**:
   - Backend: [http://localhost:8000](http://localhost:8000)
   - Frontend: [http://localhost:5173](http://localhost:5173)

## Usage
- Use the frontend to manage tasks.
- The backend provides the necessary API endpoints for task management.

## Additional Information
- For more details on the project structure, refer to the `docker-compose.yaml` file.
- If you encounter any issues, check the Docker logs for more information.

## License
This project is licensed under the MIT License. 