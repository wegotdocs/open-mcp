export { inputParams } from "./schema/root.js"

export const toolName = `list_charging_stations`
export const toolDescription = `Liste aktueller Ladestationen`
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`
export const path = `/{roadId}/services/electric_charging_station`
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