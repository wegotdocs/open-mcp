import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executecommand",
  "toolDescription": "Esegue un comando SSH su un server remoto",
  "baseUrl": "https://admin.openbuilder.net/custom",
  "path": "/aimid/execute_command",
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
      "project_id": "project_id",
      "command": "command"
    }
  },
  inputParamsSchema
}

export default tool