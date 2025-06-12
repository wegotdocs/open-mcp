import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "radar_profiler",
  "toolDescription": "Returns metadata about a given radar wind profiler",
  "baseUrl": "https://api.weather.gov",
  "path": "/radar/profilers/{stationId}",
  "method": "get",
  "security": [
    {
      "key": "User-Agent",
      "value": "<mcp-env-var>USER_AGENT</mcp-env-var>",
      "in": "header",
      "envVarName": "USER_AGENT"
    }
  ],
  "paramsMap": {
    "query": {
      "time": "time",
      "interval": "interval"
    }
  },
  inputParamsSchema
}

export default tool