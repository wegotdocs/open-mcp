export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_authentication_config`
export const toolDescription = `Create new authenticator configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/config`
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
    "config"
  ]
}
export const flatMap = {}