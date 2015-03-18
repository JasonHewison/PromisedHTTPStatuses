function reject(status, data) {
	return Promise.reject({
		data: data,
		status: status
	});
}

function resolve(status, data) {
	return Promise.resolve({
		data: data,
		status: status
	});
}

module.exports = {
	// 200s
	success: resolve.bind(resolve, 200),
	noContent: resolve.bind(resolve, 204),
	// 400s
	badRequest: reject.bind(reject, 400),
	unauthorized: reject.bind(reject, 401),
	notFound: reject.bind(reject, 404),
	conflict: reject.bind(reject, 409),
	gone: reject.bind(reject, 410),
	// 500s
	internalServerError: reject.bind(reject, 500),
	// Exposure
	reject: reject,
	resolve: resolve
};