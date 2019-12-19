const simpleGit = require('simple-git')
const path = require('path');

const fileIndexPath = path.join(__dirname + '/app.js')

//simpleGit().add([fileIndexPath], (err, data) => console.log(err))

simpleGit().add(fileIndexPath).commit('first commit').push(['-u','origin','master'], (err,data) => {
    console.log(err);
    console.log(data);
    console.log('done')
})



console.log('Hello world, just once');
console.log('Hello world, just twice');
