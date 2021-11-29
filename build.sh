#!/bin/sh

if [ -z "$1" ]
then
	echo "No path specified, using default ./test_folder"
	deno run --unstable --allow-run --allow-net --allow-read --allow-write builder.ts
else
	deno run --unstable --allow-run --allow-net --allow-read --allow-write builder.ts --contentPath $1
fi