import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tool_get_air_quality_by_station_post",
  "toolDescription": "Get Air Quality By Station",
  "baseUrl": "https://kcdassistant.duckdns.org/fastapi/korea-weather",
  "path": "/get_air_quality_by_station",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "location": "location",
      "station_name": "station_name"
    }
  },
  inputParamsSchema
}

export default tool