import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "zone",
  "toolDescription": "Returns metadata about a given zone",
  "baseUrl": "https://api.weather.gov",
  "path": "/zones/{type}/{zoneId}",
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
      "effective": "effective"
    }
  },
  inputParamsSchema
}

export default tool