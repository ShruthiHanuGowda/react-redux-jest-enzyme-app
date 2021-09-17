# React Redux Testing Template using Jest and Enzyme

The purpose of this project is to demonstrate how to properly implement a test first approch (TDD) to coding with react and redux.

Within this project you will find examples of testing:

- Connected and unconnected components
- Component state and Redux state
- Action creators and reducers
- Complex action creators that use Redux Thunk and Axios
- Action creators called from connected components

Note
npm i --save-dev enzyme enzyme-adapter-react-16 jest jest-enzyme
setup enzyme config file - setupTests.js
install node-sass for using scss files
use google fonts - and include link in the index file

setup the github repository-

1. install git, git init, git status, git add \*, git status,
2. Make new branch instead of commiting to main branch in github directly.  
   git checkout -b testingComponents
3. Lets make an initial commit to github
   git status, git add\*, git status
4. its bad practice to commit package-lock.json so to ignore it
   git restore --staged <file>
5. git commit
   git commit -m "initial commit of components", git status,
6. git commit to working branch repository
   git push origin working-branch-name

git config --global user.email "shruthi.anugowda@gmail.com", git config --global user.name "ShruthiHanuGowda", git status, git commit -m "basic commit of our config", git status

Make test-

1. Testing components
   create header.test.js file
   tests like - rendering without error,
2. Testing prop types
   //because its important to validate the data-types of props which we passing to our component
   install npm prop-types
   note: to watch all the tests click w for watch and then select a to run all the tests
   install check-prop-types - suitable for checking propTypes in unit tests than mocking console.error
