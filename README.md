# Perform IIS Operations

A node module that can be used to Start/Stop sites on IIS without having to run it as admin (the module takes care of that).

## Getting Started

## Features

*   Start IIS Site
*   Stop IIS Site


## Installation

npm i windows-service-operations

Once installed using npm, require the module in the file

var serviceOperations = require('windows-service-operations');


## Usage

Call the performIISOperations to Start/Stop a site on IIS.

The format of data to be passed is as follows:

let data = {
        "action": "stop",
        "username": "",
        "password": "",
        "serverIpAddress": "",
        "siteName": ""
    };

Now, make a call to the method performIISOperations inside the package as given below:

serviceOperations.performIISOperations(data,() => {
	console.log('Requested operation has been completed';
});
