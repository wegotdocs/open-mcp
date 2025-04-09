export { inputParams } from "./schema/root.js"

export const toolName = `tool_get_current_weather_post`
export const toolDescription = `Get Current Weather`
export const baseUrl = `https://kcdassistant.duckdns.org/fastapi/korea-weather`
export const path = `/get_current_weather`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "location"
  ]
}
export const flatMap = {}