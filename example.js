var twit = require("./src/twitscript"),
	sys = require("sys");

var twitter = new twit.init();

/*	Yeeeaaahhh bulk user lookup API */
twitter.bulkUserLookup({screen_names: ["ryanmcgrath", "enotionz"]}, function(data) {
	sys.puts("Working?");
	sys.puts(JSON.stringify(data));
});

/*twitter.getPublicTimeline(function(data) {
	for(var i = 0; i < data.length; i++) {
		sys.puts(data[i].text);
	}
}); */
