export { inputParams } from "./schema/root.js"

export const toolName = `list_autobahnen`
export const toolDescription = `Liste verfügbarer Autobahnen`
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`
export const path = `/`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}