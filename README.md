## Trackflix

### Project Setup

- Clone the repo  and navigate to the newly created folder

```bash
git clone git@github.com:kevgathuku/trackflix.git
cd trackflix
```

- Make a copy of the `.env.example` file named `.env`

```bash
  cp .env.example .env
```

- Add a valid API key from The Movie DB in the `.env` file

  This is required to get info from the The Movie DB's API.   
  You can find out more about how to get an API key at [The Movie DB FAQ](https://www.themoviedb.org/faq/api)

- Install the dependencies:
  - Using `npm`:
```bash
    npm install
```
  - Using `yarn`:
```bash
    yarn
```

- To start the server, run the command:

```bash
    npm run start
```
  The server runs on `http://localhost:8000`

The frontend client is under the `client` directory.
To start the client, run these commands:
```bash
    cd client
    yarn # or npm install
    npm run start
```
  The client runs on `http://localhost:3000`
  
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of the Create React App guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).