# Tools You Will Need
1. Make sure Node and NPM installed on your computer. You can download both at nodejs.org (NPM is included in your Node installation)
2. Use a code editor of your choice. I am using and would personally recommend using VSCode. You can download VSCode at code.visualstudio.com.
3. Make sure you have Git installed on your computer. This is necessary for deploying our application with Heroku. You can get it at git-scm.com
4. An account at heroku.com. We will use Heroku to publish our app to the web entirely free.

# Steps
1. Create node project: npm init -y
2. Create server installing express and creating a script in package.json that will start the web server
3. Create an API Endpoint (npm start)
4. Create React frontend
    1. React project named client --> npx create-react-app client
    2. add a property called proxy to client/package.json file, This will allow us to make requests to our Node server without having to provide the origin it is running on (http://localhost:3001) every time we make a network request to it
    3. start up React app by running it --> cd client and npm start
5. Make HTTP Requests from React to Node
    1. Head client/src/App.js component and make an HTTP request using useEffect
    2. Once data is received, get the message property and put it in a state variable "data". note: review https://es.reactjs.org/docs/introducing-jsx.html
6. Deploy your app with Heroku to the web
    1. First, within our client folder, make sure to remove the Git repo that is automatically initialized by create-react-app. This is essential to deploy our app, because we are going to set up a Git repo in the root folder of our project (react-node-app), not in client: cd client and rm -rf .git
    2. Allow our React and Node app to be deployed together on the same domain. When we deploy, both our Node backend and React frontend are going to be served on the same domain. We see how our requests are being handled by our Node API, so we need to write some code that will display our React app when it is requested by our user (for example, when we go to the home page of our app). Change: server/index.js and add a build script to tell how Node to do so from server/package.json/scripts Additionally: get node -v and put provide the version on a field "engines", specifying the Node version used to built the project. This will be used for deployment. 
    3. Install Heroku CLI --> npm i -g heroku, and log in --> heroku login NOTE: if ps1 files fail to execute, enable running unsigned scripts by entering: set-executionpolicy remotesigned as ADMIN on powershell, reverse after if wanted. https://superuser.com/questions/106360/how-to-enable-execution-of-powershell-scripts
    4. Initialize a new Git repo for the project, add the files to it, commit them, and add a Git remote for Heroku: 
    git init / heroku git:remote -a derobpe-react-node-app / git add . / git commit -am "Deploy app to Heroku"