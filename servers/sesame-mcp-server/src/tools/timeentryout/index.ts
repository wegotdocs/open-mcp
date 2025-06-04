import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "timeentryout",
  "toolDescription": "Time Entry Out",
  "baseUrl": "https://api-eu1.sesametime.com",
  "path": "/project/v1/time-entries/stop",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "coordinates": "coordinates"
    }
  },
  inputParamsSchema
}

export default tool