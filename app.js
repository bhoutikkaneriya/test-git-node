const simpleGit = require('simple-git')
const path = require('path');

const fileIndexPath = path.join(__dirname + '/app.js')

//simpleGit().add([fileIndexPath], (err, data) => console.log(err))

simpleGit().add(fileIndexPath).commit('first commit').push(['-u','origin','master'])



console.log('Hello world, just once');