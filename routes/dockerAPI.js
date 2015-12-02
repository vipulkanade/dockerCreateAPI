/**
 * New node file
 */
var Docker = require('dockerode');
var docker;

function createContainer(req, res) {
	var url = req.param("url");
	var PORT = req.param("port");
	var image = req.param("image");
	var image_name = req.param("image_name");
		
	docker = new Docker({host: url, port: PORT});
	
	console.log("Here: " + req);
	var data_json = {Image: image, 
			Cmd: ['/bin/bash'], 
			name: image_name};
	docker.createContainer(data_json, function (err, container) {
		var contianer_info = container;
		console.log("create Container: ");
		if (err) {
			console.log(err);
			res.send({"status":"Error", "container": null, "error": err});
		} else {
			console.log("Container Created : " + JSON.stringify(container));
			container.start(function (err, data) {
				console.log("Container Started : " + JSON.stringify(data));
				  if (err) {
					  res.send({"status":"Error", "container": null, "error": err});
				  } else {
					  res.send({"status":"Success", "container": contianer_info, "error": err});  
				  }
			  });
		}
	});
}

exports.create = createContainer;