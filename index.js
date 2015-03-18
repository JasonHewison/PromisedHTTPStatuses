module.exports = Promise(function (resolve, reject) {
	function rejectPromise(status, data) {
		return reject({
			data: data,
			status: status
		});
	}

	function resolvePromise(status, data) {
		return resolve({
			data: data,
			status: status
		});
	}

	return {
		// 200s
		success: resolvePromise.bind(resolve, 200),
		noContent: resolvePromise.bind(resolve, 204),
		// 400s
		badRequest: rejectPromise.bind(reject, 400),
		unauthorized: rejectPromise.bind(reject, 401),
		notFound: rejectPromise.bind(reject, 404),
		conflict: rejectPromise.bind(reject, 409),
		gone: rejectPromise.bind(reject, 410),
		// 500s
		internalServerError: rejectPromise.bind(reject, 500),
		// Exposure
		reject: rejectPromise,
		resolve: resolvePromise
	};
});