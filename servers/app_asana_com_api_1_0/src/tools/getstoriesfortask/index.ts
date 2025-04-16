import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getstoriesfortask",
  "toolDescription": "Get stories from a task",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/tasks/{task_gid}/stories",
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
      "limit": "limit",
      "offset": "offset",
      "opt_fields": "opt_fields"
    }
  },
  inputParamsSchema
}

export default tool