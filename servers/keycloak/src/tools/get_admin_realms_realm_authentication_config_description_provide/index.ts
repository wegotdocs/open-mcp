export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_authentication_config_description_provide`
export const toolDescription = `Get authenticator provider's configuration description`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/config-description/{providerId}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "providerId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}