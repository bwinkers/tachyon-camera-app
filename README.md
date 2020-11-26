# tachyon-camera-app
An Amplify app to take pictures and upload the to S3 for processing.

## How this was built

### Install required modules

```bash
npm install -g @aws-amplify/cli
npm install -g @vue/cli
````

### Create the Vue app

```bash
vue create tachyon-camera-app
```

You will see:

```bash
🎉  Successfully created project tachyon-camera-app.
👉  Get started with the following commands:

 $ cd tachyon-camera-app
 $ npm run serve
```

### Verify the app starts

Follow the advice offered and:

```bash
cd tachyon-camera-app
npm run serve
```

A browser window should open to http::/localhost:3000

## Amplify your efforts

Let AWS do the undifferentiated heavy lifting, Amplify is amazing for that.

### Initailize Amplify
Choose defaults unless you know what you are doing.

```bash
amplify init
```

Answer as below:

```bash
amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project tachyoncameraapp
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react

? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
? Do you want to use an AWS profile? Yes
? Please choose the profile you want to use default
```

Output will be similar to:

```bash
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

### Add Authentication

Getting auth correct yourself is easy, installing Amplify auth is easy.
Choose the `Default Configuration` for now, its easy to rerun Amplify later to update to add facebook or other Social auth.

```bash
amplify add auth
```

Use ther defaults as shown:

```bash
Using service: Cognito, provided by: awscloudformation
 The current configured provider is Amazon Cognito.
 Do you want to use the default authentication and security configuration? Default configuration
 Warning: you will not be able to edit these selections.
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? (Use arrow keys)
❯ No, I am done.
```

### Push your changes out to AWS Amplify

```bash
amplify push
```

```bash
Current Environment: dev

| Category | Resource name         | Operation | Provider plugin   |
| -------- | --------------------- | --------- | ----------------- |
| Auth     | tachyoncameraapp12345 | Create    | awscloudformation |
? Are you sure you want to continue? (Y/n)
```

## Integrate Amplify with Vue

### Install modules

```bash
npm install aws-amplify @aws-amplify/ui-vue --save
```

### Import Amplify and config in `src/index.js`

Edit `src/index.js` and add the following code below the last import:

```javascript
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
```

## Create a simple layout

Edit `src/App.js`, replace it with he following content.

```javasacript
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const App = () => (
  <div>
    <AmplifySignOut />
    My App
  </div>
);

export default withAuthenticator(App);
```

## Create an account and Login

On `http://localhost:8080` you should now see an auth prompt.
Create an account through the link on that page and verify you can login.

### Install MDB Bootstrap Vue

Open a new shell window for the remaining commands so the node app remains running.

```bash
vue add mdb
```
