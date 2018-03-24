#!/usr/bin/env python

import os
import path
import platform
import subprocess
import sys

nuget_base = None

def find_tool(package, path='tools', platform_path=None):
  global nuget_base
  if nuget_base is None:
    if 'NUGET_PACKAGES_BASE' in os.environ:
      nuget_base = os.environ['NUGET_PACKAGES_BASE']
      if not os.path.exists(nuget_base):
        print("Couldn't find NuGet packages at", nuget_base)
        sys.exit(1)
    else:
      try:
        nuget_base = subprocess.run(['nuget', 'config', 'globalPackagesFolder'], stdout=subprocess.PIPE, universal_newlines=True, check=True).stdout.strip()
      except:
        import traceback
        traceback.print_exc()
        print("Couldn't run NuGet")
        sys.exit(1)
      if not nuget_base:
        if os.path.exists(os.path.expanduser('~/.nuget/packages')):
          nuget_base = os.path.expanduser('~/.nuget/packages')
        elif os.path.exists('packages'):
          nuget_base = os.path.abspath('packages')
        else:
          print("Couldn't locate NuGet packages")
          sys.exit(1)

  pkg_path = os.path.join(nuget_base, package)
  if not os.path.exists(pkg_path):
    print("Package {0} not found. You can install it with `nuget install {0}`.".format(package))
    sys.exit(2)
  versions = os.listdir(pkg_path)
  if len(versions) == 0:
    print("Package {0} not found. You can install it with `nuget install {0}`.".format(package))
    sys.exit(2)
  elif len(versions) == 1:
    ver_path = os.path.join(pkg_path, versions[0])
  else:
    try:
      import semver
    except ImportError:
      print("You have more than one version of package {0}. Please install the Python semver package (`pip install semver`) so we can figure out which one to use.".format(package))
      sys.exit(3)
    version_infos = []
    for version in versions:
      try:
        version_infos.append(semver.parse(version))
        version_infos[-1]._pathname = version
      except:
        pass
    if len(version_infos) == 0:
      print("Package {0} not found. You can install it with `nuget install {0}`.".format(package))
      sys.exit(2)
    version_infos.sort()
    ver_path = os.path.join(pkg_path, version_infos[-1]._pathname)

  if not platform_path:
    return os.path.join(ver_path, path)
  else:
    uname = platform.uname()
    platform_part = uname.system.lower()
    if platform_part == 'darwin': platform_part = 'macosx'
    elif platform_part.startswith('linux'): platform_part = 'linux'
    if uname.machine.endswith('64'): platform_part += '_x64'
    else: platform_part += '_x32'
    full_path = os.path.join(ver_path, path, platform_part, platform_path)
    if os.path.exists(full_path):
      return full_path
    elif os.path.exists(full_path + '.exe'):
      return full_path + '.exe'
    else:
      print("Tool {1} of package {0} not found. You may be able to install it with `nuget install {0}`.".format(package, platform_part))
      sys.exit(4)

protoc = find_tool('grpc.tools', platform_path='protoc')
protobuf_tools = find_tool('google.protobuf.tools')

apis = [
  ('index.md', ['../protos/api.proto']),
  ('auth.md', ['../protos/auth.proto']),
  ('repo.md', [
    '../protos/repo/common-rpc.proto',
    '../protos/repo/common-types.proto',
    '../protos/repo/catalog-rpc.proto',
    '../protos/repo/catalog-types.proto',
  ]),
]

cmd_base = [
  protoc,
  '-I', '../protos', '-I', protobuf_tools,
  '--doc_out=.',
]

for out_name, protos in apis:
  cmd = cmd_base + ['--doc_opt=markdown,{0}'.format(out_name)] + protos
  print(*cmd)
  subprocess.run(cmd)
