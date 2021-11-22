let testFolder = './data';
let fs = require('fs');

fs.readdir(testFolder, function(drror, filelist){
    console.log(filelist);
})