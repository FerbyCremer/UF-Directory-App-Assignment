/* Fill out these functions using Mongoose queries*/
mongoose = require('mongoose');
var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   line.find({name: 'Library West'}, function(err, Listing){
   if (err) throw err;

     // object of the user
     console.log(line);
});
}
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   line.find({ code: 'CABL' }, function(err, line) {
     if (err) throw err;

     // delete him
     line.remove(function(err) {
       if (err) throw err;

       console.log('Listing successfully deleted!');
     });
   });
}
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   line.find( {name:'Phelps Laboratory'}, function(err, line) {
     if (err) throw err;

     // change
     line.address = '102 Phelps Lab, Gainesville, FL 32611, United States';

     // save the
     line.save(function(err) {
       if (err) throw err;

       console.log('Listing successfully updated!');
     });
     });

}
var retrieveAllListings = function() {
  line.find({}, function(err, line){
  if (err) throw err;

  console.log(Listings);
});
}

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
