export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_identity_provider_instances_alias_export`
export const toolDescription = `Export public broker configuration for identity provider`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/identity-provider/instances/{alias}/export`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "format"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}