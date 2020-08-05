var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

// ****** METHOD 1 ******
app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof! Woof!"
	}
	var animal = req.params.animal;
	var sound = sounds[animal];
	res.send("The "+ animal +" says '" + sound +"'");
});

// ******* METHOD 2 *********
// app.get("/r/speak/:subredditName", function(req, res){
// 	var subreddit = req.params.subredditName;
// 	if(subreddit == "pig")
// 		{
// 			var sound = "Oink";
// 		}
// 	else if(subreddit == "cow")
// 		{
// 			var sound = "Moo";
// 		}
// 	else if(subreddit == "dog")
// 		{
// 			var sound = "Woof Woof!";
// 		}
		
// 	res.send("The "+ subreddit +" says '" + sound +"'");
// });

app.get("/r/repeat/:message/:id/", function(req, res){
	var message = req.params.message;
	var num = Number(req.params.id);
	var result = "";
	for(var i=0; i<num; i++)
		{
			result += message+ " ";
		}
	res.send(result);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

// Tell Express to listen for requests (START SERVER)
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});
