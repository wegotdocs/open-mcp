import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gridpoint_forecast_hourly",
  "toolDescription": "Returns a textual hourly forecast for a 2.5km grid area",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/gridpoints/{wfo}/{x},{y}/forecast/hourly",
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
      "units": "units"
    },
    "header": {
      "Feature-Flags": "Feature-Flags"
    }
  },
  inputParamsSchema
}

export default tool