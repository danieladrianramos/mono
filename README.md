# mono

This repo contains my solution for the test. 


## Tech used

- Vue.js
- Vue test utils
- Jest
- Vuese
- Axios
- Bootsrap 4


## Folder structure

- **src/**
    - **main.js:** entry point of the app.
    - **App.vue:** is the only view that this app has.
    - **components/:** it contains the components used for solving the test: a form, a log and a list for displaying the results.
    - **services/:** it contains the services for getting the country data and for managing the log into the local storage. 
    - **services/:** it contains the services for getting the country data and for managing the log into the local storage.
- **test/** 
    - **unit/:** it contains the test for our app.
 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Running tests
```
npm run test:unit
```

### Generate documentation for components
```
npm install -g @vuese/cli
vuese gen
```

### Display documentation
```
vuese serve --open
```
