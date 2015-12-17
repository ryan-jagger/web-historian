var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');

// require more modules/folders here!



exports.handleRequest = function (req, res) {
  fs.readFile(__dirname+'/public/index.html', 'utf8', function(error, data){
    if(error) { console.log(error);}

    //console.log(data);
    res.writeHead(200);
    res.write(data);

    res.end();
  });

  //res.end(archive.paths.list);


};
