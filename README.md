## DeferredHTTPStatuses
A quick promise wrapper and helper for http status codes

### Install

    npm install deferred-http-statuses --save

### Use

    var Deferred = require('deferred-http-statuses');

    var deferred = new Deferred();

    if (err) {
      deferred.badRequest(err);
    } else {
      deferred.success();
    }

    return deferred.promise;

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
      resolve: deferred.resolve,
      promise: deferred.promise
