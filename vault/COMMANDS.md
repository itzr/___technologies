-- utility --
info: `vault` and tab (**same for subcommands**)
args info: `vault -` and tab (**same for subcommands**)
-- start up --
server: `vault server`
dev server (not for prod): `vault server -dev`
-- get/put --
put=`vault kv put secret/hello foo=world baa=car`
put from file (json structure)=`vault kv put secret/hello-again @apikey.txt` (**file can contain multiple key-value pairs**)
*put also updates*
get=`vault kv get secret/hello`
get (value only)=`vault kv get -field=excited secret/hello` (-field=<key_name>)
get JSON output=`vault kv get -format=json secret/hello | jq -r .data.data.excited` (** note: uses jq tool)
-- delete --
vault kv delete secret/hello
-- CRUD --
https://learn.hashicorp.com/tutorials/vault/getting-started-secrets-engines?in=vault/getting-started
https://learn.hashicorp.com/tutorials/vault/getting-started-help?in=vault/getting-started
