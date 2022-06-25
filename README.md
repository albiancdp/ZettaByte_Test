Step to create project

1. npm i @babel/cli @babel/core @babel/node @babel/preset-env --save-dev
2. npm i @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread --save-dev
3. npm i rimraf nodemon --save-dev
4. npm install eslint eslint-config-prettier prettier –-save-dev
5. npm i express --save
5. npm i cors --save
5. npm i helmet --save
5. npm i express-rate-limit --save
5. npm i compression --save
5. npm i winston --save

-. add in package.json

```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "rimraf dist && babel src --out-dir dist  --copy-files",
        "start": "node dist/app.js",
        "start:dev": "nodemon --exec babel-node src/app.js"
    },
```

-. create .babelrc and copy

```
    {
        "presets": [
            ["@babel/env", {
            "targets": {
                "node": "current"
            }
            }]
        ],
        "plugins": [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread"
        ]
    }
```
