const Git = require('nodegit');
const Checkout = Git.Checkout;

// clone
Git.Clone('https://github.com/xieqian423/canvas', './git-resposity-canvas').then(function (repo) {
    
})

// open dir
const path = ''
Git.Repository.open(path).then(repo => {

})

// merge



