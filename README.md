# TryHackMe Assessment

Task A Simple Task Application with **Node.js**, **TypeScript**, **Express**, **MongoDB**, and **React**.

## Instructions on Setup

The following are instructions on how to set up the project locally:

- Clone the [repository](https://github.com/selirah/tryhackme-simple-task-app.git) into your local envorionment.
- Open the application with your favorite editor (e.g VS Code).
- The following subdirectories and README.md file are found in the application root:
  - backend
  - frontend
  - README

### Running the API (Backend) in Dev Mode

- Still in the root directory, open a terminal and **cd** into the **backend** directory.

```console
cd backend
```

- Make sure you have node installed on your computer to get access to the npm command.
- Visit this [link](https://nodejs.org/) if you do not have node already installed.
- Run the following command to install the npm packages (dependencies).

```console
npm install
```

- Create a .env file in the backend root directory and copy and paste the contents of .env.example into it.
- Replace the values of the following keys with your own values:

```
MONGODB_URL="mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER_NAME>.mongodb.net/tasks?retryWrites=true&w=majority"
JWT_SECRET="YOUT_JWT_SECRET"
COOKIE_SECRET="YOUR_COOKIE_SECRET"
PORT=4000
```

- The Server is running on port 4000 so you can leave it as it is. If you change it, then it means it has to be changed in the frontend as well.
- Run the following command to start the backend application in dev mode:

```console
npm run dev
```

- The backend URL is http://localhost:4000/
- The endpoint is http://localhost:4000/api/v1
- The API documentation can be found on postman at this [link](https://documenter.getpostman.com/view/254707/2s9YXb8jxU)

### Running the React app (Frontend) in Dev Mode

- Open another terminal whiles leaving the backend terminal to run and **cd** into the **frontend** directory.
- Run the following command to install the npm packages (dependencies).

```console
npm install
```

- Run the following command to start the frontend application in dev mode:

```console
npm run dev
```

- The frontend URL is http://localhost:5173/
- The UI/UX design mockups can be located at this Figma [link](https://www.figma.com/file/NZmDRPYICkTUCCPtzwGFUJ/TryHackMe-Simple-API?type=design&node-id=0%3A1&mode=design&t=ch0Hq6cXNG8nNwxr-1)

## Decisions Made During Development and Reasons Behind

There were some few decisions that I made regarding the development of both the frontend and the back. I listed some of them and explain my thoughts behind such choices:

### Backend

- **User Auth** - The test instructions state explicitly on implementing user auth but I thought I had to, to make the application cleaner, secured and well organized. This means one user can only have a view of their own tasks when they log into the app.

- **Cookie Auth** - Also because this application is a simple one, I decided to go with the Cookie authentication using as a way of authorizing users using middleware. A JWT token is created and signed with the user's data and the secret key of the application. The token is then parsed into the response header as Cookie and set in the user's browser. The cookie expires in 1 hour. `httpOnly` is set to true to prevent client side scripts from accessing data
  All the tasks api http methods (`GET`, `POST`, `PUT`, `DELETE`) are authorized requests.

- **CORS Middleware** - The CORS middleware was added to protect data of users of the system from malicious websites and unauthorized data access. The only allowed origin in the CORS middleware is the URL of the frontend application.

- **Server Side Validation** - Most at times simple validations like form validations are performed on the frontend. I decided to include valdiations on the backend as well just to be extra secured and also help in testing all edge cases when using http clients like Postman.

### Frontend

- **UI/UX Design** - UI mocks are a valuable tool in the software development process, helping to ensure that the final product aligns with the design and usability goals. They promote collaboration, save time and resources, and improve the overall quality of the application.

- **SCSS/SASS (Vanila CSS)** - Vanilla CSS/SASS allows for complete customization. You have full control over the styles and can create designs that are tailored to the project's specific requirements. CSS libraries often come with a lot of styles and features that you may not need, leading to unnecessary file size and complexity expecially for developing a simple application such as this.

- **React Context API for State Management** - For a simple application like this, the React Context API is often a suitable and efficient choice. It provides a more straightforward and lightweight approach to state management and reduces the overhead associated with state management libraries such as Redux. Redux is suitbale for complex applications.

## Enhancements/Improvements to Features

- **User Auth** - Signup and Login features are implemented to secure user data adn also keep the application ordganized. A user can only have access to tasks they have created.
- **Task Filtering** - You can filter tasks based on active tasks, completed tasks, or expired tasks. This will enable the user keep track of all tasks they create.
- **Check to complete feature** - User can check a task to set it to complete.
- **CI/CD Automation**: Using Github Actions, a popular web-based platform for version control and collaboration on software development projects. GitHub Actions allows developers to automate various tasks and workflows within their GitHub repositories.

## Future Improvements

- **Running Development Tests** - Setting up localized testing in the application such as unit tests, integration, and end-to-end tests. They play a vital role in ensuring the quality, reliability, and maintainability of software applications.
- **Running the application on Containers such as Docker** - Containerization is a technique used to package an application and its dependencies, including libraries and runtime, in a consistent and isolated environment called a container. Containers are portable, lightweight, and can run consistently across different environments, making them an excellent choice for deploying applications.
