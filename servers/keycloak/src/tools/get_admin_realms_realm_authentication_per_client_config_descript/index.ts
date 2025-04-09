export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_authentication_per_client_config_descript`
export const toolDescription = `Get configuration descriptions for all clients`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/authentication/per-client-config-description`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}