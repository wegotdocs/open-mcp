import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getweatherdata",
  "toolDescription": "Retrieve current weather, hourly forecast, and daily forecast based on latitude and longitude.",
  "baseUrl": "https://api.openweathermap.org",
  "path": "/data/2.5/weather",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "lat": "lat",
      "lon": "lon",
      "appid": "appid"
    }
  },
  inputParamsSchema
}

export default tool