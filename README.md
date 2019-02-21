# Snowcoop Service
## Description

Midterm assignment backend service for login and registeration functionality

## How to run this backend service?

1. open your SQL manager UI (phpMyAdmin, MySQL Workbench, Sequel Pro)

2. make a database name called snowcoop

3. download the sql file or copy the query code: https://github.com/prof-kimm/snowcoop-service/blob/master/database/sql/snowcoop_2019-02-21.sql

4. import it or run the copied query code into snowcoop database 

5. git clone this repo by running git@github.com:prof-kimm/snowcoop-service.git

6. install typescript by running 
```bash
$ npm install -g typescript
```

7. install ts-node by running npm install -g ts-node
```bash
$ npm install -g ts-node
```

8. install all the dependency packages by running
```bash
$ npm install
```

9. start the backend service by running 
```bash
$ npm run start:dev
```


## How to mock api request?
You can test the api with Insomnia application: https://insomnia.rest/

1. download insomnia client application at https://insomnia.rest/
2. download json file at https://github.com/prof-kimm/snowcoop-service/blob/master/test/snowcooper-insomnia.json
3. import that file into insomnia workspace
4. run endpoint 
