Meteor.publish('pictuers', function() {        //use to public data to client
    return Pictures.find();        //push everthing out
  });       //publication's name is "posts"

//example for selected publication:
// Meteor.publish('posts', function() {
//     return Posts.find({flagged: false}); 
//   });

//selected publication with parameter:
// Meteor.publish('posts', function(author) {
//     return Posts.find({flagged: false, author: author});
//   });

//all the posts publicated at here will be push to the client, but the client has the right to hide them: by using "find()" function

//hide part of the field from the client:
// Meteor.publish('allPosts', function(){
//     return Posts.find({}, {fields: {
//       date: false
//     }});
//   });