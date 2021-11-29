import { Leaf } from "https://deno.land/x/leaf@v1.0.4/mod.ts";
import { parse } from "https://deno.land/std@0.115.1/flags/mod.ts";

const args = parse(Deno.args, { string: ["contentPath"], default: { contentPath: "./test_folder" } });
if (!args.contentPath) {
	console.error("Argument --contentPath is mandatory!");
} else {
	let source = await Deno.readTextFile("./source.ts");
	if(args.contentPath !== "./test_folder") {
		source = source.replace('const contentPath = "./test_folder"', `const contentPath = "${args.contentPath}"`);
	}
	await Deno.writeTextFile("./embedded_files_server.ts", source);
	await Leaf.compile({
		modulePath: "./embedded_files_server.ts",
		contentFolders: [args.contentPath],
		flags: ["--allow-net"]
	});
	await Deno.remove("./embedded_files_server.ts");
}
