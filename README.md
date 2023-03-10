## Introduction
This is a simple tool that facilitate collection of data on travel routes and places as well as provide travel time, cost to the user.
### User Stories
1. The user can enter the destination name into an online form
1. The user can enter place of origin name
1. The user can select mode of transport
1. The user will get the distance between the two points
1. The user will get the total approximate travel time 
1. The user will get description of his/her destination as per other users
1. User can add something interesting the description of a route
1. User can view places commonly travelled by others on a map
Things you may want to cover:

## Requirements
- Ruby 3.0.2p107
- Rails version: 7.0.4.2
- NodeJS (v16), and npm
- Postgresql
- OpenStreeMap

See Environment Setup below for instructions on installing these tools if you don't already have them.
## Setup
When you're ready to start building your project, run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)
* Ruby version

* System dependencies

* Configuration


## Instructions

The React application is in the `client` directory. To set it up, from the root
directory, run:

```console
$ npm install --prefix client
```

Using `--prefix client` will run the npm command within the `client` directory.

To set up your backend, run:

```console
$ bundle install
```

To see how the React application and Rails API are interacting, you can run the
Rails application in one terminal by running:

```console
$ rails s
```

Then, [open another terminal][new terminal] and run React:

```console
$ npm start --prefix client
```

[new terminal]: https://code.visualstudio.com/docs/editor/integrated-terminal#_managing-terminals

Each application will run on its own port on `localhost`:

- React: [http://localhost:4000](http://localhost:4000)
- Rails: [http://localhost:3000](http://localhost:3000)

* Database creation

* Database initialization

* How to run the test suite

* Deployment instructions
