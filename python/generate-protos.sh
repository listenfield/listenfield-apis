python -m grpc_tools.protoc -I ../protos --python_out=. --grpc_python_out=. ../protos/common-rpc.proto ../protos/common-types.proto ../protos/catalog-rpc.proto ../protos/api.proto ../protos/catalog-types.proto ../protos/auth.proto ../protos/status.proto