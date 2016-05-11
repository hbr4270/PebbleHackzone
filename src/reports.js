var debug = false;
var Settings = require('settings');
var UI = require('ui');
var Vector2 = require('vector2');
//var Vibe = require('ui/vibe'); //******
//var error = require('error');
//var parseFeed = require('parseFeed');
//var ajax = require('ajax');
//var comments = require('comments');
//var menuTitle = "Reports";
var reports = {
  show: function(instance,encoded_auth,user_name) {
    instance = Settings.option('instance');
    encoded_auth = Settings.option('encoded_auth');
    user_name = Settings.option('user_name');
    if(debug){
      console.log("DEBUG Stored instance value is: " + instance);
      console.log("DEBUG Stored encoded_auth value is: " + encoded_auth);
      console.log("DEBUG Stored user_name value is: " + user_name);
    }
 
    //var splashWindow = new UI.Card({ banner: 'images/users_by_location.png' });
    
    // Show splash screen while waiting for data
    var splashWindow = new UI.Window();
 
    // Text element to inform user
    var text = new UI.Text({
      position: new Vector2(0, 0),
      size: new Vector2(144, 168),
      text:'Locations',
      font:'GOTHIC_28_BOLD',
      color:'black',
      textOverflow:'wrap',
      textAlign:'center',
      backgroundColor:'white'
    });

    //var image = new UI.Image({ 
      //image: 'images/users_by_location.png',
      //size: new Vector2(144, 168),
     // backgroundColor:'white'
    //});
 
    // Add to splashWindow and show
    splashWindow.add(text);
    //splashWindow.add(image);
    splashWindow.show();
    
  }
};
this.exports =  reports;