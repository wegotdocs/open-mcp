import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "taf",
  "toolDescription": "Returns a single Terminal Aerodrome Forecast.",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/stations/{stationId}/tafs/{date}/{time}",
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
      "stationId": "stationId",
      "date": "date",
      "time": "time"
    }
  },
  inputParamsSchema
}

export default tool