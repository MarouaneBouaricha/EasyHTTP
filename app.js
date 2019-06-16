const http = new easyHTTP();


//Get posts
/*
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
*/

//Get single post
/*
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
*/

//Create data
let data = {
  title: 'My Post',
  body: 'this is my first post'
};

//post request
/*
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
*/
data = {
  title: 'Updated post',
  body: 'this is my first updated post'
};
//put request
/*
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
*/

//delete request
/*
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
*/
