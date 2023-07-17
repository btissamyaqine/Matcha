# Matcha
Welcome to "Matcha", a dating web application designed to bring people together based on compatibility, common interests and personal preferences.

## Installing dependencies at the client side:

### step 1:
- We used ReactJS as our frontend framework to develop a responsive web application, we getting the react app by        runnin the commande: 

```bash
$ npm create-react-app project_name
```

### Step2 :
- to navigate between different pages in react application, we need a router component which will help us do so easily. should install React Router DOM.

```bash
$ npm install react-router-dom --save
```
### Step3:
-  we need Axios to allows us communicate with APIs easily in our React apps. 
To do this, run these commands inside your terminal or command prompt:
```bash
npm i axios -S # Installsaxios package and saves it as a dependency in your package.
import axios from 'axios'; // Imports axios into any file where you want to use its functionality.
```
### step 4:
We will be using TailwindCss for styling components like buttons, cards etc., so to add tailwindcss library :
````bash
npx tailwind init # Initializes tailwind config files (tailwind.config.js & postcss
)files). Then open up the newly created `postcss.config.js` file and update it
to include `@tailwind css;` under plugins section. Finally, import styles within each component
using `<style jsx>{``}</style>` tag
````

### step 5:
- For password hashing/salting purposes, we're going to make useof BcryptJs which is a popular Node.JS module used for hash passwords securely before storing them in database. To set
up BcryptJs use :
```bash
npm i bcryptjs 
```
### step 6:
- JWT Decoder. You can use this tool to decode JWTs and analyze their contents. You can also verify the signature if you have the public key. To set up BcryptJs use:
```bash
npm i jwt-decode
```
Now that all of our necessary packages are installed, let's get started ! : 

```bash
$ npm start
```
## Installing dependencies at the server side:
To run this project successfully we need some additional libraries which needs installation on Node Server Side also.

### step 1 :
Create a new folder named "server" in your project’s main directory by running this command from
your terminal or cmd prompt :-
```bash
mkdir server && cd $_
```
This will create and move into the newly created “server” subdirectory where we can set up our Node
application.
Next, initialize an empty package.json file inside it using `npm init` command which creates basic
package information like name, version etc.:
```bash
cd .. # go back to parent dir (main) before initializing node app here again!
npm init -y   // initializes with default values for everything except author field(optional). This is a shorthand way of doing 'npm init' followed immediately by '-y'.
```
### step 2:
- Install Express framework for handling HTTP requests/responses. 
````bash
npm i express
````
### step 3 :
- Install nodemon to monitors your project directory and automatically restarts your node application when it detects any changes.
````bash
npm i nodemon
````
### step 4: 
- Install body-parser, It is responsible for parsing the incoming request bodies in a middleware before you handle it.

````bash
npm i body-parser
````
### Step 5: 
- Install mysql database toallows us to store data in tables with rows and columns .

```bash
npm i mysql --save
```
This will add the `mysql` package and its dependency, `mysql-connector`, as a project dependency in your `package.json`. 

### step 6 :
- Install Squelize : An Object Relational Mapper performs functions that makes it easy to work with MySQL, like handling database records by representing the data as objects.
```bash
npm i squelize
```

### step 7:
- Install JsonWebToken to secure transmitting information between parties
```bash 
npm install jsonwebtoken 
```
- Install bcrypt to hash an salt password sercurly
```bash 
npm install bcrypt
```
- Install cors to allows restricted resources on a web page to be requested from another domain.
```bash 
npm i cors
```
- Install dotenv This enables you to manage sensitive information consistently while maintaining its security.
```bash
npm i dotenv
```

- Create a new file named `.gitignore`. Add the following lines of code there so that Git will ignore, the node modules and other development files in our repository.
```
/node_modules/*
/.env*
!/config/*.json # include config JSONs but not others like .env or README etc...
!.gitignore
!package*.json
```
This way we ensure only necessary production files are committed to GitHub while ignoring all unnecessary ones for local setup.


To check if package has been successfully downloaded, you can run `ls` command inside your project directory and look into "node_modules" folder.

we can now start our server side by runnin the server
file `server.js` in terminal using node command
```javascript
const express = require('express'); //importing Express module for creating API's
const app = express();//creating instance of Express App
app.use(express.json()); //to parse request body payload into JSON format
app.listen(PORT, () => {
 console.log(`Server started on http://localhost:${PORT}`);
});
/*
Important Note : In production enviornment make sure you set your NODE_ENV variable
before starting the server otherwise it will default to devlopment which is unsecure
*/
```
now run :
``$ npm start ``.
    





