import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_gridpoints_wfo_x_y_forecast",
  "toolDescription": "",
  "baseUrl": "https://api.weather.gov",
  "path": "/gridpoints/{wfo}/{x},{y}/forecast",
  "method": "parameters",
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