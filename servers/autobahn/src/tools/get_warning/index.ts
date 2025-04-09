export { inputParams } from "./schema/root.js"

export const toolName = `get_warning`
export const toolDescription = `Details zu einer Verkehrsmeldung`
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`
export const path = `/details/warning/{warningId}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "warningId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}