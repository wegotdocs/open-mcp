import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "obs_stations",
  "toolDescription": "Returns a list of observation stations.",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/stations",
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
      "id": "id",
      "state": "state",
      "limit": "limit",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool