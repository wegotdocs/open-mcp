export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_realms_realm_organizations_org_id_members`
export const toolDescription = `Returns a paginated list of organization members filtered according to the specified parameters`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/organizations/{org-id}/members`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "exact",
    "first",
    "max",
    "membershipType",
    "search"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}