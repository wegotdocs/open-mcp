export { inputParams } from "./schema/root.js"

export const toolName = `migrationresource_updateentitypropertiesvalue_put`
export const toolDescription = `Bulk update entity properties`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/migration/properties/{entityType}`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [
    "Atlassian-Transfer-Id"
  ],
  "path": [
    "entityType"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}