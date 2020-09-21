## Whats is this project ?
DS Pesquisa consists in a survey available only in a mobile app, made with Reactive Native + Expo, that collects whats is the user favorite game. 
The games are split in 3 plataforms: PC, Playstation and XBOX. The results of this survey are available in a site made with React. <br/>
The back end was made using Java + Spring Boot and the database is postgresql.
<br/>Live project:<br/>

[Netlify - React Front-end](https://sds1-fernanda.netlify.app/)

[Heroku - Java API](https://sds1-fernanda.herokuapp.com/games)

---

## Available Scripts

### In the folder front-web, you can run:

`npm run start`

Runs the app with the result of the survey.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br /><br />

### In folder front-mobile, you can run:

`npm run start`

Since the mobile app survey was made with [Expo.io](https://expo.io/), to be able to preview the project, it is necessary to install the expo app in your smartphone. After this, open Expo Client on your device. Scan the QR code printed by expo start with Expo Client (Android) or Camera (iOS). You may have to wait a minute while your project bundles and loads for the first time.

Now you will be able to answer the survey in the mobile DS Pesquisa App.

<br /><br />

### In folder backend, you can run:

`./mvnw spring-boot:run`

This will start a Java + Spring boot application that provides the API to both frontend web and mobile aplication.
<br /><br />     

![mobile version](https://i.imgur.com/k0whuBC.png)
<br /><br />
---

#### This project was created in the following bootcamp:
[Semana DevSuperior 1.0](https://devsuperior.com.br/sds1c)<br />
[Github DevSuperior](https://github.com/devsuperior/sds1)

