import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "station_observation_time",
  "toolDescription": "Returns a single observation.",
  "baseUrl": "https://api.weather.gov",
  "path": "/stations/{stationId}/observations/{time}",
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
    "path": {
      "time": "time"
    }
  },
  inputParamsSchema
}

export default tool