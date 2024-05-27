export default {
	async fetch(request, env, ctx) {
		let url = new URL(request.url);
		url.hostname = env.HOST || env.URL || "ssh-crazypeace.koyeb.app";
		return await fetch(new Request(url, request))
	},
};
