import { serve } from "https://deno.land/std@0.115.1/http/server.ts";
import { parse } from "https://deno.land/std@0.115.1/flags/mod.ts";

const contentPath = "./test_folder";

const args = parse(Deno.args, { default: { port: 3000 } });
const addr = ":"+args.port;
console.log(`Webserver running. Access site at: http://localhost:${args.port}/`);
await serve(handler, { addr });

async function handler(request: Request): Promise<Response> {
	const url = new URL(request.url);
	const urlPathName = url.pathname === '/' ? '/index.html' : url.pathname;
	const path = `${contentPath}${urlPathName}`;
	try {
		const content = await Deno.readFile(path);
		console.log("Serving "+path);
		return new Response(content, { status: 200 });
	} catch(err) {
		console.log("Failed: "+err.message);
		return new Response('Not found', { status: 404 });	
	}
}
