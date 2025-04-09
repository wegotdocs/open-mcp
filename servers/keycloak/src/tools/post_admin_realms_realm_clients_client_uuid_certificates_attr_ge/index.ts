export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_clients_client_uuid_certificates_attr_ge`
export const toolDescription = `Generate a new keypair and certificate, and get the private key file

Generates a keypair and certificate and serves the private key in a specified keystore format.
Only generated public certificate is saved in Keycloak DB - the private key`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/generate-and-download`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "realmCertificate",
    "storePassword",
    "keyPassword",
    "keyAlias",
    "realmAlias",
    "format"
  ]
}
export const flatMap = {}