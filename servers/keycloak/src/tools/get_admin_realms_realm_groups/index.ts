export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_groups`
export const toolDescription = `Get group hierarchy.  Only \`name\` and \`id\` are returned.  \`subGroups\` are only returned when using the \`search\` or \`q\` parameter. If none of these parameters is provided, the top-level groups are returned without \`subGroups\` being filled.`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/groups`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "briefRepresentation",
    "exact",
    "first",
    "max",
    "populateHierarchy",
    "q",
    "search"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}