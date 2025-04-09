export { inputParams } from "./schema/root.js"

export const toolName = `dynamicmodulesresource_registermodules_post`
export const toolDescription = `Register modules`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/app/module/dynamic`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "modules"
  ]
}
export const flatMap = {}