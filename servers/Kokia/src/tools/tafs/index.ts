import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tafs",
  "toolDescription": "Returns Terminal Aerodrome Forecasts for the specified airport station.",
  "baseUrl": "https://api.weather.gov/v1",
  "path": "/stations/{stationId}/tafs",
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
      "stationId": "stationId"
    }
  },
  inputParamsSchema
}

export default tool