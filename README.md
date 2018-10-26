# windows-server-admin
An npm package to perform various operations on windows server with admin rights.
The package handles the execution of commands with admin rights and therefore, can be used directly without running in Administrator mode.

## Getting Started

## Features

1. Start IIS Site
2. Stop IIS Site
3. Start a windows service
4. Stop a windows service


## Installation

npm i windows-server-admin

## Usage

Once installed using npm, require/import the module in the respective file.

    var serverAdmin = require('windows-server-admin');

#IIS Actions:

Call the method:
    performIISOperations with data as the parameter

The format of data to be passed is as follows:

    let data = {
        "action": "", -- the values expected are: start/stop
        "username": "",
        "password": "",
        "serverIpAddress": "",
        "name": ""
    };

Now, make a call to the method performIISOperations inside the package as given below:

serverAdmin.performIISOperations(data,() => {
	console.log('Requested operation has been completed';
});

#Windows Service Operations:

Call the method:
    performWindowsServiceOperations with data as the parameter

The format of data to be passed is as follows:

    let data = {
        "action": "", -- the values expected are: start/stop
        "username": "",
        "password": "",
        "serverIpAddress": "",
        "name": ""
    };

Now, make a call to the method performWindowsServiceOperations inside the package as given below:

serverAdmin.performWindowsServiceOperations(data,() => {
	console.log('Requested operation has been completed';
});



