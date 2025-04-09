export { inputParams } from "./schema/root.js"

export const toolName = `delete_admin_realms_realm_localization_locale_key_`
export const toolDescription = ``
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/localization/{locale}/{key}`
export const method = `delete`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "key",
    "locale"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}