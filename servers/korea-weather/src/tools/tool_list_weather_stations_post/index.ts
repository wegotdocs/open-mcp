export { inputParams } from "./schema/root.js"

export const toolName = `tool_list_weather_stations_post`
export const toolDescription = `List Weather Stations`
export const baseUrl = `https://kcdassistant.duckdns.org/fastapi/korea-weather`
export const path = `/list_weather_stations`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}