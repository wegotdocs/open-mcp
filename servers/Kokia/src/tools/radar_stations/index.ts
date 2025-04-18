import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "radar_stations",
  "toolDescription": "Returns a list of radar stations",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/radar/stations",
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
      "stationType": "stationType",
      "reportingHost": "reportingHost",
      "host": "host"
    }
  },
  inputParamsSchema
}

export default tool