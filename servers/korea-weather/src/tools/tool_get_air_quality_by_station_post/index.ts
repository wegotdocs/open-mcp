export { inputParams } from "./schema/root.js"

export const toolName = `tool_get_air_quality_by_station_post`
export const toolDescription = `Get Air Quality By Station`
export const baseUrl = `https://kcdassistant.duckdns.org/fastapi/korea-weather`
export const path = `/get_air_quality_by_station`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "location",
    "station_name"
  ]
}
export const flatMap = {}