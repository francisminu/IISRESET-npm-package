# windows-service-operations
An npm package to perform various operations like:
Start IIS site
Stop IIS site
The package executes the required commands as Admin and therefore, users do not have to launch it in Administrator mode.

## Getting Started

## Features

*   Start IIS Site
*   Stop IIS Site


## Installation

npm i windows-service-operations

## Usage

Once installed using npm, require the module in the file

var serviceOperations = require('windows-service-operations');

Call the performIISOperations to Start/Stop a site on IIS.

The format of data to be passed is as follows:

    let data = {
        "action": "", -- the values expected are: start/stop
        "username": "",
        "password": "",
        "serverIpAddress": "",
        "siteName": ""
    };

Now, make a call to the method performIISOperations inside the package as given below:

serviceOperations.performIISOperations(data,() => {
	console.log('Requested operation has been completed';
});

