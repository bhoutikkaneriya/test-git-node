const simpleGit = require('simple-git')
const path = require('path');

const fileIndexPath = path.join(__dirname + '/app.js')

//simpleGit().add([fileIndexPath], (err, data) => console.log(err))

simpleGit().init().add(fileIndexPath).commit('first commit').addRemote('origin', 'https://github.com/bhoutikkaneriya/test-git-node.git').push(['-u','origin','master'])



console.log('Hello world, just once');