export interface apiOptions {
	headers: Record<string, string> | Headers
	mode: "navigate" | "same-origin" | "no-cors" | "cors" | undefined,
	cache: 'default' | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached" | undefined,
}

const defaultHeaders = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

const defaultApiOptions: apiOptions = {
	headers: {},
	mode: undefined,
	cache: 'default'
}

function mergeHeaders(customHeaders: Record<string, string> | Headers): Headers {
	const headers = new Headers(customHeaders);
	for (let header in defaultHeaders) {
		if (!headers.has(header)) {
			headers.set(header, defaultHeaders[header]);
		}
	}
	return headers;
}//return Object.assign({}, customHeaders, defaultHeaders);



export async function get (url: string, options: apiOptions = defaultApiOptions) {
	const newOptions = {
		method: 'GET',
		headers: mergeHeaders(options.headers),
		mode: options.mode,
		cache: options.cache
	};
	return fetch(url, newOptions).then((response) => response.json());
}

export function post (url: string, body: object, options: apiOptions = defaultApiOptions) {
	const newOptions = {
		method: 'POST',
		headers: mergeHeaders(options.headers),
		mode: options.mode,
		cache: options.cache,
		body: JSON.stringify(body)
	};
	return fetch(url, newOptions).then((response) => response.json());
}


export function put (url: string, body: object, options: apiOptions = defaultApiOptions) {
	const newOptions = {
		method: 'PUT',
		headers: mergeHeaders(options.headers),
		mode: options.mode,
		cache: options.cache,
		body: JSON.stringify(body)
	};
	return fetch(url, newOptions).then((response) => response.json());
}
