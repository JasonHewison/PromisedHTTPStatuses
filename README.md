## PromisedHTTPStatuses
A quick ES6 promise wrapper and helper for http status codes

### Install

    npm install promised-http-statuses --save

### Use

    var statusCode = require('promised-http-statuses');

    function save() {
      return new Promise(function () {

        if (saved) {
          statusCode.success('Saved!');
        } else {
          statusCode.conflict('Already exists');
	      }

      });
    }

    save().then(function (response) {
      response.status // 2xx
      response.data
    }, function (response) {
      response.status // 4xx, 500
      response.data
    });

### Methods

      // 200s
      success(data),
      noContent(data),
      // 400s
      badRequest(data),
      unauthorized(data),
      notFound(data),
      conflict(data),
      gone(data),
      // 500s
      internalServerError(data),
      // Exposure
      reject(status, data)
      resolve(status, data)
