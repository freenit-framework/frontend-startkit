#!/bin/sh


BIN_DIR=`dirname $0`
. "${BIN_DIR}/common.sh"
export OFFLINE=yes

setup

echo "Frontend"
echo "========"
env HOST=$(hostname) "${PACKAGE_MANAGER}" start
