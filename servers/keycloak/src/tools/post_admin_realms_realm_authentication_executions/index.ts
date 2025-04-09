export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_authentication_executions`
export const toolDescription = `Add new authentication execution`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/executions`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "authenticatorConfig",
    "authenticator",
    "authenticatorFlow",
    "requirement",
    "priority",
    "id",
    "flowId",
    "parentFlow"
  ]
}
export const flatMap = {}