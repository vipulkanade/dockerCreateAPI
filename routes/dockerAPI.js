/**
 * New node file
 */
var Docker = require('dockerode');
var docker, url, PORT, container, image, volume, network;

function createContainer(req, res) {
	url = req.param("url");
	PORT = req.param("port");
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

function delete_container(req, res) {
	console.log(" URL : " + req.query.url);
	console.log(" URL : " + req.query.port);
	console.log(" URL : " + req.query.cont_id);
	url = req.query.url;
	PORT = req.query.port;
	var container_id = req.query.cont_id;

	docker = new Docker({host: url, port: PORT});
	
	container = docker.getContainer(container_id);
	
	container.remove(function (err, data) {
		if (err) {
			res.send({"status":"Error", "error": err});
		} else {
			console.log(data);
			res.send({"status":"Success", "data":data, "error": err});
		}
	});
	
}

function delete_image(req, res) {
	console.log(" URL : " + req.query.url);
	console.log(" URL : " + req.query.port);
	console.log(" URL : " + req.query.image_name);
	url = req.query.url;
	PORT = req.query.port;
	var img_name = req.query.image_name;

	docker = new Docker({host: url, port: PORT});
	
	image = docker.getImage(img_name);
	
	image.remove(function (err, data) {
		if (err) {
			res.send({"status":"Error", "error": err});
		} else {
			console.log(data);
			res.send({"status":"Success", "data":data, "error": err});
		}
	});
	
}

function delete_volume(req, res) {
	console.log(" URL : " + req.query.url);
	console.log(" URL : " + req.query.port);
	console.log(" URL : " + req.query.volume_name);
	url = req.query.url;
	PORT = req.query.port;
	var vol_name = req.query.volume_name;

	docker = new Docker({host: url, port: PORT});
	
	volume = docker.getVolume(vol_name);
	
	volume.remove(function (err, data) {
		if (err) {
			res.send({"status":"Error", "error": err});
		} else {
			console.log(data);
			res.send({"status":"Success", "data":data, "error": err});
		}
	});
}

function delete_network(req, res) {
	console.log(" URL : " + req.query.url);
	console.log(" URL : " + req.query.port);
	console.log(" URL : " + req.query.network_name);
	url = req.query.url;
	PORT = req.query.port;
	var net_name = req.query.network_name;

	docker = new Docker({host: url, port: PORT});
	
	network = docker.getNetwork(net_name);
	
	network.remove(function (err, data) {
		if (err) {
			res.send({"status":"Error", "error": err});
		} else {
			console.log(data);
			res.send({"status":"Success", "data":data, "error": err});
		}
	});
}

exports.create = createContainer;
exports.delete_container = delete_container;
exports.delete_image = delete_image;
exports.delete_volume = delete_volume;
exports.delete_network = delete_network;