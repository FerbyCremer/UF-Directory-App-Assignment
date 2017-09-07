'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config.js');

mongoose.connect(config.db.uri);

fs.readFile('./listings.json', 'utf8', function (err, data) {
var data = JSON.parse(data);
  for (var i = 0; i < data.entries.length; i++){
    var line = data.entries[i];
    var lines = new Listing({
                     code: line.code,
                     name: line.name,
                     coordinates: (line.latitude, line.longitude),
                     address: line.address
                   });


   lines.save(function(err) {
      if (err) throw err;
      else
      console.log("entry created");
    });
    }
  });
 mongoose.connect(config.db.uri).close;