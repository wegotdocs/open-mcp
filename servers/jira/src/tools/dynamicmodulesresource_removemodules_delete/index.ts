export { inputParams } from "./schema/root.js"

export const toolName = `dynamicmodulesresource_removemodules_delete`
export const toolDescription = `Remove modules`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/app/module/dynamic`
export const method = `delete`
export const security = []
export const keys = {
  "query": [
    "moduleKey"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}