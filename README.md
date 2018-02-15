# ListenField public APIs

This repository contains the official reference (“proto files”) for the ListenField public APIs.

Our public APIs are implemented using [grpc](https://grpc.io), which means:

- The definition files (“proto files”) serve both as documentation, and machine-readable protocol definition.

- Using the official [grpc tools](https://grpc.io/docs/quickstart), you can create client libraries for (as of this writing) 10 languages / environments. [A](https://google.github.io/tarpc/tarpc/index.html) [few](https://github.com/bluehouse-technology/grpc) [more](https://github.com/grpc/grpc-haskell) are available in the broader community.

That said, we included scripts in this repository for generating an SDK for a few languages, especially in cases (like Python) where we felt we could make it a little more idiomatic and programmer-friendly.

## Getting started

The first thing you need to do is choose your language and environment.

Then, unless you're already familiar with it, we recommend you take a few minutes to get familiar with the basics of grpc. If you're using one of the 10 official clients, just read through the corresponding [quickstart](https://grpc.io/docs/quickstart) document. Otherwise, the library for your language/environment probably has an equivalent document (often based on the exact same examples).

*Note, even if using one of the officially supported languages, it might be worth looking around [the community](https://github.com/bojand/awesome-grpc) before making a commitment. For Node.js for example, we recommend the [grpc-caller](https://github.com/bojand/grpc-caller) package instead of the official one.*

Next, if using Python or a CLR (.net/mono) language, you can generate the SDK using the provided scripts. Otherwise, you'll want to run `protoc` according to the instructions in the grpc website; you can use the Python or .net generator scripts as an example of what parameters to use.

Browse the `protos` folder and find the API you want to interact with. Each proto file defines “messages” (data structures) and “services” (collections of API calls). The grpc quickstart documents should give you an idea how that maps to actual code in your chosen language.

## The APIs

The repository currently includes these APIs:

- ListenField Auth (`auth.proto`): authenticating against ListenField accounts, for use with the other APIs, and management of these accounts and associated information.

- ListenField Farm Repository (`repo/`): a specialized database of information used by various other APIs, allowing your code to access and manage your data.

## Example code

In the `examples` folder, you'll find:

- Authentication client (`auth-client.py`): a very simple example of how to interact with the APIs in Python; also useful in practical use for interacting with the authentication system (including authenticating and refreshing sessions) from the command line.

- Repository examples (`repo-client.py`): demonstrates a few Repository calls in Python.

Before running any example code, you need to generate and install the respective client library. In the case of python, generate the library running the `python/gen-protos.py` script, then copy the resulting `listenfield_client` folder to your `site-packages` folder in the Python path.
