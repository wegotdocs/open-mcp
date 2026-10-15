#!/usr/bin/env bash

print_version() {
  local tool=$1
  shift
  if command -v "$tool" &>/dev/null; then
    echo "### $tool"
    "$@" 2>/dev/null || echo "(version check failed)"
  else
    echo "### $tool"
    echo "Not installed"
  fi
  echo
}

echo "## CLI tool versions"
echo
print_version terraform terraform version
print_version kubectl kubectl version --client=true
print_version helm helm version --short
print_version gcloud gcloud --version
print_version aws aws --version
print_version eksctl eksctl version
print_version az az version

echo "## kubectl contexts"
echo
if command -v kubectl &>/dev/null; then
  kubectl config get-contexts
else
  echo "Not available"
fi
echo
echo "## ./keys directory"
echo
if [ -d ./keys ]; then
  shopt -s nullglob
  json_files=(./keys/*.json)
  shopt -u nullglob
  if [ ${#json_files[@]} -gt 0 ]; then
    printf '%s\n' "${json_files[@]}"
  else
    echo "(no JSON files)"
  fi
else
  echo "Not present"
fi
