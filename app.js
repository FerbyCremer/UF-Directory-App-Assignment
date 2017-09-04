/* register the modules the application depends upon here*/
angular.module('listings', ['code','name','coordinates','address']);

/* register the application and inject all the necessary dependencies */
var app = angular.module('directoryApp', ['listings']);