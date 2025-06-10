import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removedependentsfortask",
  "toolDescription": "Unlink dependents from a task",
  "baseUrl": "https://app.asana.com/api/1.0",
  "path": "/tasks/{task_gid}/removeDependents",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool