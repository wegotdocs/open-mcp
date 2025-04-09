export { inputParams } from "./schema/root.js"

export const toolName = `tool_get_air_quality_post`
export const toolDescription = `Get Air Quality`
export const baseUrl = `https://kcdassistant.duckdns.org/fastapi/korea-weather`
export const path = `/get_air_quality`
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