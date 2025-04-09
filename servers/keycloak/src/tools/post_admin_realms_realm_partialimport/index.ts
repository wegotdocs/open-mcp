export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_realms_realm_partialimport`
export const toolDescription = `Partial import from a JSON file to an existing realm.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/partialImport`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}