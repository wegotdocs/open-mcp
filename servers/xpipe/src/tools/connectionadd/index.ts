import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "connectionadd",
  "toolDescription": "Add connection",
  "baseUrl": "http://localhost:21721",
  "path": "/connection/add",
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
      "name": "name",
      "data": "data",
      "validate": "validate",
      "category": "category"
    }
  },
  inputParamsSchema
}

export default tool