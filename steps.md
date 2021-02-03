#Steps
1. Create node project: npm init -y
2. Create server installing express and creating a script in package.json that will start the web server
3. Create an API Endpoint
4. Create React frontend
4.1. React project named client --> npx create-react-app client
4.2. add a property called proxy to client/package.json file, This will allow us to make requests to our Node server without having to provide the origin it is running on (http://localhost:3001) every time we make a network request to it
4.3. start up React app by running it --> cd client and npm start