/*	A Streaming client addition to Twitscript, a Twitter API wrapper
 *	for Node.js.
 *
 *	There's a lot of influence from Technoweenies Twitter-Node library^ throughout
 *	this file. The reason it's not used verbatim is because I opted to tie the overall
 *	API directly into the existing Twitscript library - a more cohesive experience.
 *
 *	^ = http://github.com/technoweenie/twitter-node.git ~ Enjoy his source
 *
 *	@Author: Ryan McGrath (ryan [at] venodesigns.net), with the above noted influence
 *	@Requires: base64.js, pretty much (transparently) requires Twitscript ;P, OAuth.js (in odd fashions)
 */

var sys = require("sys"),
	http = require("http"),
	base64 = require("./vendor/base64");

/* Yes, I'm too lazy to clone mixin. Hush. */
exports.Streamer = function(setupObj) {
	if(!setupObj) var setupObj = {};
	
	this.headers = setupObj.headers;
	this.headers['Authorization'] = setupObj.auth;
	this.port = setupObj.port || 80;
	this.type = setupObj.type;
	this.api = setupObj.api;
	this.following = setupObj.follow || [];
	this.track = setupObj.keywords || [];
	this.locations = setupObj.locations || [];
	
	this.client = null;

	this.username = setupObj.username;
	this.password = setupObj.password;
};

exports.Streamer.prototype = {
	buildParams: function() {
		var options = {
			track: this.track,
			following: this.following,
			locations: this.locations,
		};

		if(this.track.length > 0)
			options.track = this.track.join(",")
		
		if(this.following.length > 0)
			    options.follow = this.following.join(",")
		
		if(this.locations.length > 0)
			options.locations = this.locations.join(",")
		
		if(options.track || options.follow || options.locations)
			return "?" + query.stringify(options)
		else
			return ""
	},
	
	start: function() {
		var url = this.api + this.type + ".json?" + this.buildParams();
		this.client = http.createClient(this.port, this.host);
		
		/* POST to get around long URL junk */
		var request = client.request("POST", url, headers);

		request.addListener('response', function(response) {
			response.setBodyEncoding('utf8');
			
			response.addListener('data', function(chunk) {

			});
		
			response.addListener('end', function() {

			});
		});
		request.end();
		return this;
	},

};
