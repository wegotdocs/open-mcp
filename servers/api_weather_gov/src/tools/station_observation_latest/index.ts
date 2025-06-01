import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "station_observation_latest",
  "toolDescription": "Returns the latest observation for a station",
  "baseUrl": "https://api.weather.gov",
  "path": "/stations/{stationId}/observations/latest",
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
      "require_qc": "require_qc"
    }
  },
  inputParamsSchema
}

export default tool