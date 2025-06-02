import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "alerts_active_area",
  "toolDescription": "Returns active alerts for the given area (state or marine area)",
  "baseUrl": "https://api.weather.gov",
  "path": "/alerts/active/area/{area}",
  "method": "get",
  "security": [
    {
      "key": "User-Agent",
      "value": "<mcp-env-var>USER_AGENT</mcp-env-var>",
      "in": "header",
      "envVarName": "USER_AGENT"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool