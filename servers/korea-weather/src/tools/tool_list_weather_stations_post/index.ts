import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tool_list_weather_stations_post",
  "toolDescription": "List Weather Stations",
  "baseUrl": "https://kcdassistant.duckdns.org/fastapi/korea-weather",
  "path": "/list_weather_stations",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool