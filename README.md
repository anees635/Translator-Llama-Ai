# Language Translator Application

A **Language Translator Application** built using **React**, **Express.js**, and **Llama AI Model** to provide seamless and high-quality text translations from English to Urdu.


## Table of Contents
1. [About Project](#About-Project)
2. [Built With](#built-with)
3. [Getting Started](#getting-started)
    - [Express Backend](#express-backend)
    - [API Backend](#API-Backend)
    - [Frontend(React)](#Frontend)
4. [Locally Run](#locally-run)
5. [Push to GitHub](#push-to-github)
6. [Deploy on Vercel](#deploy-on-vercel)



## About Project

This project is a Language Translator Application built using **Llama AI model**. It enables users to translate text from **English** language to **Urdu** with ease and accuracy. 
The project **features** a React-based frontend for user interaction, an Express.js backend to handle API requests, and a Express server running the Llama AI model for performing translations. 

### Key Features:
1. **User-friendly Interface:** A clean and intuitive React frontend for smooth interaction.

2. **Translation API:** An Express.js backend to manage client requests and connect to the AI model.

3. **AI-Powered Translations:** Leverages the advanced Llama AI model for high-quality translation. Here, we use the llama3-8b-8192 model for translation.

4. **Full-Stack Integration:** A well-structured architecture that connects the frontend, backend, and AI-powered model.

## Built With

- **Frontend**: [React](https://reactjs.org/)
- **Backend API**: [Express.js](https://expressjs.com/)
- **AI Model**: [Llama AI](https://ai.meta.com/llama/)
- **Integration using** [groqcloud](https://console.groq.com/docs/quickstart)
- **Languages**: JavaScript, HTML, CSS
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started
 We use Visual Code for our project.
 
### Express Backend
 First, create a package.json using the following command:
  - npm init

 Then, install **Express** to embed the AI Model in our project.

 - npm install express (for installing express we must have node.js and npm in our PC)

 Import Express in our code using the code:
   - import express from "express";
     
 Go to [GroqCloud](https://console.groq.com/docs/quickstart) to check the code to embed the AI model.
   - First create API key that help you to access the AI model.
   - Install groq-sdk in our code using the following command:
      - npm install --save groq-sdk
   - Import the groq-sdk using the following command:
      - import Groq from "groq-sdk";
   - Write the code from quick start of GroqCloud to do chat with AI model.
   - Write this code inside post request and Handle errors in case the model does not provide a response.
     
 Also create instance of this project using the following command:
   - const app = express();
       
 Create PORT constant and listen app on that port using method:
   - .listen()
 
 Some other packages and middleware:
  - dotenv
  - body-praser
  - urlencoded
    
 Use the GroqColud API key that we make at the first step for the working of the model.
  - Create **.env** file.
  - Inside this file use the API key as the environment variable.
  - Load environment variable using the dotenv package.
  - Use load environment variable using:
      - *process.env.name_of_variable*
       
 Run the server to check whether the AI model responds or not.
   - node index.js (index is the name of file).

 Create folder named Express Backend and push this repository to github using github desktop.

### API Backend
 Create a folder named API Backend.
  - install express after creating package.json.
  - Packages and middleware:
       - body-praser
       - axios
       - cors
       - urlencoded

 Listen api on 8080 port and also used *process.env.port* (in case of deploy) .

 Create post method to accept the data and request .
  - Use axios to send request to backend.
  - Send the response of AI model to frontend as response.
  - Handle errors in post method.

 Test API using postman to cheack whether the API working properly or not.
 
 Push this folder as repository named API backend to github.
 
### Frontend
 We use REACT framework for making the frotend

 Create react app using following command:
   - npm create-react-app fapp  (here fapp name of app)

 In src folder, at the App.js 
  - Give header to app
  - Use translatesec as component

 At the translatesec.js 
  - Use to form one for input the text, the other is to display the text.
  - When input form is submit handle submit function is called to send request to API using axios package.
  - Use translatesec.css for making the translate section responsive.

 Change the favicon for the app.

 Upload this folder as repository named translator frontend at github

## Locally Run

 Run all servers to check our project.
   - Run backend server (*node index.js*)
   - Run API server (*node api.js*)
   - Run frontend (*npm start*)

 Give the text to input form and handle the submit by pressing the translate button.


## Push to Github

   Create a folder Translator Project.
     - inside this we have backend and frontend as separate folder.

   Push this folder as repositry to Github using Github desktop.


## Deploy on Vercel
  We have express backend, API backend, Frontend as seperate repo at github.

  First, create account on vercel using github.

  At each project install vercel using following command:
   - npm install vercel

  Then, do vercel login.
   - vercel login

  Deploy each folder separately using the following command:
   - vercel

  Check the vercel dashbord for you project.

  Change the link to send request in frontend post request as well as in API backend with the deployed server link.
  
  Verify the deployment links provided by Vercel.
  
  **Note:**
    For express we have to create vercel.json that help to deploy project.


 
 
 
