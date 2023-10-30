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

- **User Authentication** - The test instructions state explicitly on implementing user auth but I thought I had to, to make the application cleaner, secured and well organized. This means one user can only have a view of their own tasks when they log into the app.

- **Cookie Auth** - Also because this application is a simple one, I decided to go with the Cookie authentication using as a way of authorizing users using middleware. A JWT token is created and signed with the user's data and the secret key of the application. The token is then parsed into the response header as Cookie and set in the user's browser. The cookie expires in 1 hour. `httpOnly` is set to true to prevent client side scripts from accessing data
  All the tasks api http methods (`GET`, `POST`, `PUT`, `DELETE`) are authorized requests.

- **CORS Middleware** - The CORS middleware was added to protect data of users of the system from malicious websites and unauthorized data access. The only allowed origin in the CORS middleware is the URL of the frontend application.

- **Server Side Validation** - Most at times simple validations like form validations are performed on the frontend. I decided to include valdiations on the backend as well just to be extra secured and also help in testing all edge cases when using http clients like Postman.

### Frontend

**UI/UX Design**

**SCSS/SASS (Vanila CSS)**

**React Context API**

**Use of SVGs**
