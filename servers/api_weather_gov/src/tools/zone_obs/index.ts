import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "zone_obs",
  "toolDescription": "Returns a list of observations for a given zone",
  "baseUrl": "https://api.weather.gov",
  "path": "/zones/forecast/{zoneId}/observations",
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