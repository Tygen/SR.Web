Router.configure({
    layoutTemplate: 'layout',        //tell the router that template layout is the default layout for every page
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',       //pair with onBeforeAction, 404
    waitOn: function() { return Meteor.subscribe('pictures'); }
  });
  
Router.route('/', {name: 'cardList'});     //we didn't add the path parameter, so it will lead us to postsList template by default. 

Router.route('/pictures/:_id', {
    name: 'cardPage',
    data: function() { return Pictures.findOne(this.params._id); }
  });

Router.onBeforeAction('dataNotFound', {only: 'cardPage'});      //used for handle false _id, 404