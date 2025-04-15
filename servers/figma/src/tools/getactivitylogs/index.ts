import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getactivitylogs",
  "toolDescription": "Get activity logs",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/activity_logs",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "events": "events",
      "start_time": "start_time",
      "end_time": "end_time",
      "limit": "limit",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool