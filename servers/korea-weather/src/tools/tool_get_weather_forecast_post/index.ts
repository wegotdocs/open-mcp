import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tool_get_weather_forecast_post",
  "toolDescription": "Get Weather Forecast",
  "baseUrl": "https://kcdassistant.duckdns.org/fastapi/korea-weather",
  "path": "/get_weather_forecast",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "location": "location"
    }
  },
  inputParamsSchema
}

export default tool