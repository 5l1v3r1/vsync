#!/bin/bash

function vault_unseal() {
    sleep 10
    INIT_DATA=$(vault operator init --key-shares=1 --key-threshold=1 --format json)
    UNSEAL_KEY=$(echo "${INIT_DATA}" | jq -r '.unseal_keys_b64[0]')
    ROOT_TOKEN=$(echo "${INIT_DATA}" | jq -r '.root_token')
    vault operator unseal ${UNSEAL_KEY} > /dev/null
    echo ${ROOT_TOKEN}
}

function origin_token() {
    echo '
# TODO: remove create update delete when vsync code is not checking for all capabilities of a token
path "secret/*" {
  capabilities = ["create","update","read","list","delete"]
}
path "multipaas/*" {
  capabilities = ["create","update","read","list","delete"]
}
path "sys/mounts" {
    capabilities = ["read","list"]
}
' > /tmp/vsync_origin
    vault policy write vsync_origin /tmp/vsync_origin
    vault token create --policy vsync_origin --ttl 2h
    echo "Copy the token and place in config file"
}

function destination_token() {
    echo '
# TODO: remove create update delete when vsync code is not checking for all capabilities of a token
path "secret/*" {
  capabilities = ["create","update","read","list","delete"]
}
path "multipaas/*" {
  capabilities = ["create","update","read","list","delete"]
}
path "sys/mounts" {
    capabilities = ["read","list"]
}
' > /tmp/vsync_destination
    vault policy write vsync_destination /tmp/vsync_destination
    vault token create --policy vsync_destination --ttl 2h
    echo "Copy the token and place in config file"
}

