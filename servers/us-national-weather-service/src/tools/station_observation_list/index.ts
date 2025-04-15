import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "station_observation_list",
  "toolDescription": "Returns a list of observations for a given station",
  "baseUrl": "https://api.weather.gov",
  "path": "/stations/{stationId}/observations",
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
      "start": "start",
      "end": "end",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool