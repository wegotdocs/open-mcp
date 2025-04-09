export { inputParams } from "./schema/root.js"

export const toolName = `tool_get_nearest_station_post`
export const toolDescription = `Get Nearest Station`
export const baseUrl = `https://kcdassistant.duckdns.org/fastapi/korea-weather`
export const path = `/get_nearest_station`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "latitude",
    "longitude"
  ]
}
export const flatMap = {}