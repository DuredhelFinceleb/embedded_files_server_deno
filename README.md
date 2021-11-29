# Embedded Files Server in Deno

A small utility to create a binary embedding a static website/webapp and a webserver to serve it.

Was my proof of concept before doing it in Rust (https://github.com/DuredhelFinceleb/embedded_files_server), but I thought I'll publish it anyway.

Useful for example if you need to run a webapp on any machine without having to copy the files & setup a webserver.

Instead, just copy the binary and launch your browser.

The server is always launched on localhost.

By default, it listens on port 3000. This can be changed at runtime using the '--port' command line argument. This means you can run multiple instances of the same website/webapp.

Under the hood it uses:
* std@0.115.1/flags for command line arguments handling
* std@0.115.1/http for webserving
* leaf@v1.0.4 (https://github.com/mandarineorg/leaf) for files embedding

Executed with:
* deno 1.16.2

Tested with
* Ubuntu 20.04
* WSL running Ubuntu 20.04
* Windows 10 Pro 21H1

## How to install

Clone this repo.

Run the build script with the path of the folder to embed
Under Linux
```
chmod +x ./build.sh
./build.sh <path_to_folder_to_embed>
```
Under Windows:
```
.\build.cmd <path_to_folder_to_embed>
```
The binary will be into the same folder as the build script & named 'embedded_files_server' (or 'embedded_files_server.exe' on Windows). It can be renamed and moved freely. Just run it. The '--port' command line argument will be accepted to change the port from the default 3000.