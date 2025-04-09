export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_client_types`
export const toolDescription = `Update a client type`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/client-types`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "client-types",
    "global-client-types"
  ]
}
export const flatMap = {}