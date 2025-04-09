export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_authentication_flows`
export const toolDescription = `Create a new authentication flow`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/flows`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "id",
    "alias",
    "description",
    "providerId",
    "topLevel",
    "builtIn",
    "authenticationExecutions"
  ]
}
export const flatMap = {}