
# React Native Boilerplate  
  
Boilerplate for react native with redux and redux-offline for offline-first
  
## Getting Started  
  
  
**clone project**  
```sh  
git clone git@github.com:joshuadiezmo/react-native-boilerplate.git
```  
**go to your project folder**  
```sh  
cd project-name  
```  
**make it your own:**  
```sh  
rm -rf .git && git init && npm init  
```  

**Install**  
```sh  
yarn install  
```

**Update App name**  
- update name field in package.json file
- update app.json file
- delete `android` and `ios` path
- run ``` react-native upgrade --legacy true ``` always choose `no` to prevent to update some files.
- run ```react-native link```
- run ```cd ios/ pod install cd ..```



### Libraries
- [@react-native-community/async-storage](https://github.com/react-native-community/async-storage)
- [@react-native-community/netinfo](https://github.com/react-native-community/react-native-netinfo)
- [@redux-offline/redux-offline](https://github.com/redux-offline/redux-offline)
- [axios](https://github.com/axios/axios)
- [prop-types](https://github.com/facebook/prop-types)
- [react-redux](https://react-redux.js.org/)
- [redux](https://redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)

#### Special Mention
- [randomuser](https://randomuser.me/) for sample api fetch using redux-offline

#### Created by
Name: Joshua Diezmo
Email: joshuadiezmo@gmail.com
