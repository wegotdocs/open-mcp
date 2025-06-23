import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "shellexec",
  "toolDescription": "Run command in shell session",
  "baseUrl": "http://localhost:21721",
  "path": "/shell/exec",
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
      "connection": "connection",
      "command": "command"
    }
  },
  inputParamsSchema
}

export default tool