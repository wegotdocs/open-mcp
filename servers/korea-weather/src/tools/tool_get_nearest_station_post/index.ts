import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tool_get_nearest_station_post",
  "toolDescription": "Get Nearest Station",
  "baseUrl": "https://kcdassistant.duckdns.org/fastapi/korea-weather",
  "path": "/get_nearest_station",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "latitude": "latitude",
      "longitude": "longitude"
    }
  },
  inputParamsSchema
}

export default tool