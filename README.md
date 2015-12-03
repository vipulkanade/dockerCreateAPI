# dockerCreateAPI

Docker Create API which creates the container in your Docker instance

Run this Node application in your server.

##API
~~~~~~~~~~~~
/create-container

 Params required

	url - ip address
	port - port number
	image - Image you want container of (e.g ubuntu)
	image_name - Name of Image (e.g. ubuntu_test)
~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~
/delete-container

 Params required (send this as query parameter in string)

	url - ip address
	port - port number
	cont_id - contianer id to remove
~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~
/delete-image

 Params required (send this as query parameter in string)

	url - ip address
	port - port number
	image_name - contianer id to remove
~~~~~~~~~~~~~~~~~

#Example Request
~~~~~~~~~~~~~~~~
request = {
				method: 'POST',
				url: 'http://localhost:3000/create-container',
				headers: {'Content-Type': 'application/json' },
				data : { "image": "ubuntu", "image_name": "ubuntu_test" }
		}
~~~~~~~~~~~~~~~~


#License
~~~~~~~~~~~~~~~
Copyright 2015 Vipul Kanade

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
~~~~~~~~~~~~~~~~~