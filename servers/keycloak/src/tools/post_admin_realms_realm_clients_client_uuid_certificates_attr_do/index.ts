export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_clients_client_uuid_certificates_attr_do`
export const toolDescription = `Get a keystore file for the client, containing private key and public certificate`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/download`
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