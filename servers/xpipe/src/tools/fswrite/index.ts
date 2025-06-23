import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fswrite",
  "toolDescription": "Write blob to a remote file",
  "baseUrl": "http://localhost:21721",
  "path": "/fs/write",
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
      "blob": "blob",
      "path": "path"
    }
  },
  inputParamsSchema
}

export default tool