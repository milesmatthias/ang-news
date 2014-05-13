'use strict';
 
app.factory('Post', function ($resource) {
  return $resource('https://glaring-fire-3855.firebaseIO.com/posts/:id.json');
});
