export { inputParams } from "./schema/root.js"

export const toolName = `get_charging_station`
export const toolDescription = `Details zu einer Ladestation`
export const baseUrl = `https://verkehr.autobahn.de/o/autobahn`
export const path = `/details/electric_charging_station/{stationId}`
export const method = `get`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "stationId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}