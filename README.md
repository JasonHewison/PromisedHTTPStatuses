## PromisedHTTPStatuses
A quick ES6 promise wrapper and helper for http status codes

### Install

    npm install promised-http-statuses --save

### Use

    var PromisedHTTPStatuses = require('promised-http-statuses');

    var promise = new Promise(PromisedHTTPStatuses);

    if (err) {
      promise.badRequest(err);
    } else {
      promise.success();
    }

    return promise;

### Methods

      // 200s
      success,
      noContent,
      // 400s
      badRequest,
      unauthorized,
      notFound,
      conflict,
      gone,
      // 500s
      internalServerError,
      // Exposure
      reject: deferred.reject,
      resolve:
