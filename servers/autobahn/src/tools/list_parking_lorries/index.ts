export { inputParams } from "./schema/root.js"

export const toolName = `list_parking_lorries`
export const toolDescription = `Liste verfügbarer Rastplätze`
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`
export const path = `/{roadId}/services/parking_lorry`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "roadId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}