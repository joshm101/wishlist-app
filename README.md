# MERN Starter

Includes:
* MongoDB
* Express
* React (w/o Redux)
* Node
* Mocha testing for React components

Dependencies:

 * [MongoDB](https://www.mongodb.com/) (ensure it is installed and 'mongod' is apart of PATH)
 * [Node.js](https://nodejs.org/en/)
 * package.json dependencies (npm install)

_____________

##### Once MongoDB is installed and 'mongod' is apart of PATH, run the starter application:

In one terminal/cmd, run an instance of MongoDB:
```
mongod
```

In another terminal/cmd, run the application:
```
npm run start
```

By default, `mongod` will listen to connections on port 27017. The Express application will use port 27017 by default to connect to a MongoDB instance.

______________

##### If you want to specify a port for MongoDB & Mongoose, run like so:

In one terminal/cmd, run MongoDB w/ port specified:
```
mongod --port=[portNumber]
```

In another terminal/cmd, run the application:
```
set MONGOOSE_PORT=[portNumber] & npm run start
```

______________