# tachyon-camera-app
An Amplify app to take pictures and upload the to S3 for processing.

## How this was built

### Create the React app

```bash
npx create-react-app tachyon-camera-app
```

You will see:

```bash
Success! Created tachyon-camera-app at /home/brian/sandbox/tachyon-camera-app/tachyon-camera-app
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd tachyon-camera-app
  npm start
```

### Verify the app starts

Follow the advice offered and:

```bash
cd tachyon-camera-app
npm start
```

A browser window should open to http::/localhost:3000

### Install Bootstrap MDB

Open a new window so the node app remains running.

```bash
npm install --save mdbootstrap
```

Edit `/public/index.html` and add the following above head and below the body:

At the bottom of the HEAD:

```html
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <!-- Google Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap">
    <!-- Bootstrap core CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- Material Design Bootstrap -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet">
    <title>React App</title>
  </head>
```

At the start of the BODY

```html
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <!-- JQuery -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- Bootstrap tooltips -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js"></script>
    <div id="root"></div>
```

## Amplify your efforts

Let AWS do the undifferentiated heavy lifting, Amplify is amazing for that.

### Initailize Amplify

Choose defaults unless you know what you are doing.

```bash
amplify init
```

### Add Authentication

Getting auth correct yourself is easy, installing Amplify auth is easy.
Choose the `Default Configuration` for now, its easy to rerun Amplify later to update to add facebook or other Social auth.


```bash
amplify add auth
```

### Publish your chnages out to AWS

```bash
amplify publish
```