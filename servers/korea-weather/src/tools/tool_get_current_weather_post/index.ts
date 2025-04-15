import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tool_get_current_weather_post",
  "toolDescription": "Get Current Weather",
  "baseUrl": "https://kcdassistant.duckdns.org/fastapi/korea-weather",
  "path": "/get_current_weather",
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