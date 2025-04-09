export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_default_default_client_scopes_clientscope`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/default-default-client-scopes/{clientScopeId}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "clientScopeId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}