export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_localization_locale_`
export const toolDescription = `Import localization from uploaded JSON file`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/localization/{locale}`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "locale"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}