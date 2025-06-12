import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "radar_servers",
  "toolDescription": "Returns a list of radar servers",
  "baseUrl": "https://api.weather.gov",
  "path": "/radar/servers",
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
      "reportingHost": "reportingHost"
    }
  },
  inputParamsSchema
}

export default tool