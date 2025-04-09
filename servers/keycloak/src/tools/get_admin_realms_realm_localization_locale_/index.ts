export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_localization_locale_`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/localization/{locale}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "useRealmDefaultLocaleFallback"
  ],
  "header": [],
  "path": [
    "locale"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}