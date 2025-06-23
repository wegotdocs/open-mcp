import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fsscript",
  "toolDescription": "Write blob to a shell script",
  "baseUrl": "http://localhost:21721",
  "path": "/fs/script",
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
      "blob": "blob"
    }
  },
  inputParamsSchema
}

export default tool