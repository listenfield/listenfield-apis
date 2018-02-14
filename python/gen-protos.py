#!/usr/bin/env python

import os
import pkg_resources
import re
import shutil
import sys

from grpc_tools.protoc import main

proto_include = pkg_resources.resource_filename("grpc_tools", "_proto")

if os.path.exists("build"):
  shutil.rmtree("build")
os.makedirs("build")

args = [
  "protoc", # first one is ignored, as it would normally be sys.argv[0]
  "--python_out=./build",
  "--grpc_python_out=./build",
  "../protos/api.proto",
  "../protos/repo/common-rpc.proto",
  "../protos/repo/common-types.proto",
  "../protos/repo/catalog-rpc.proto",
  "../protos/repo/catalog-types.proto",
  "../protos/auth.proto",
  "../protos/status.proto",
  "--proto_path=" + proto_include,
  "--proto_path=" + "../protos",
]
print(args)
res = main(args)

if res: sys.exit(res)

local_import_re = re.compile(r"import (.*_pb2) as (.*__pb2)")
pkg_local_import_re = re.compile(r"from (.*) import (.*_pb2) as (.*__pb2)")
packages = ["repo"]

def clean_pb2(fn): return fn.replace("_pb2", "")

if os.path.exists("listenfield_client"):
  shutil.rmtree("listenfield_client")
for package in packages:
  os.makedirs("listenfield_client/{}".format(package))
  with open("listenfield_client/{}/__init__.py".format(package), "w") as f: f.write("#empty")
with open("listenfield_client/__init__.py", "w") as f: f.write("#empty")
for (dirpath, dirnames, filenames) in os.walk("build"):
  pkg = dirpath[len("build") + 1:]
  outpath = dirpath.replace("build", "listenfield_client")
  for fn in filenames:
    out_fn = clean_pb2(fn)
    with open("{}/{}".format(dirpath, fn)) as f_in:
      with open("{}/{}".format(outpath, out_fn), "w") as f_out:
        for line in f_in:
          match = pkg_local_import_re.match(line)
          if match:
            i_pkg, i_mod, i_name = match.groups()
            if i_pkg == pkg:
              f_out.write("from . import {} as {}\n".format(clean_pb2(i_mod), i_name))
            elif i_pkg.startswith("google"):
              f_out.write(line)
            else:
              f_out.write("from ..{} import {} as {}\n".format(i_pkg, clean_pb2(i_mod), i_name))
          else:
            match = local_import_re.match(line)
            if match:
              i_mod, i_name = match.groups()
              if pkg:
                f_out.write("from .. import {} as {}\n".format(clean_pb2(i_mod), i_name))
              else:
                f_out.write("from . import {} as {}\n".format(clean_pb2(i_mod), i_name))
            else:
              f_out.write(line)
