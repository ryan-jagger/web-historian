var fs = require('fs');
var path = require('path');
var archive = require('../helpers/archive-helpers');

// require more modules/folders here!



exports.handleRequest = function (req, res) {
  if(req.method === "POST") {
    //check to see if in sites.txt
    //console.log("request object", req);
    //console.log(req.method);
    console.log('post req url', req.url);
    archive.isUrlInList(req.url, function(exists) {
      if (exists) {
        console.log("it exists already");
      } else {
        archive.addUrlToList(req.url);
      }
    });
      //is so, return the archived site
    //if not, add to sites.text
    //provide loading html
  }
//  console.log('request url: ', req.url);
//  console.log('request method: ', req.method);

  fs.readFile(archive.paths.siteAssets+'/index.html', 'utf8', function(error, data){
    if(error) { console.log(error);}

    // archive.downloadUrls(function(d){
    //   console.log(d);
    // });




    res.writeHead(200);
    res.write(data);
    res.end();
  });



};
