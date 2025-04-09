export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_identity_provider_instances`
export const toolDescription = `List identity providers`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation",
    "first",
    "max",
    "realmOnly",
    "search"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}