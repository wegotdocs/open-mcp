export { inputParams } from "./schema/root.js"

export const toolName = `appissuefieldvalueupdateresource_updateissuefields_put`
export const toolDescription = `Bulk update custom field value`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/migration/field`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [
    "Atlassian-Transfer-Id"
  ],
  "path": [],
  "cookie": [],
  "body": [
    "updateValueList"
  ]
}
export const flatMap = {}