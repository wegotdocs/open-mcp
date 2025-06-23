import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "connectionbrowse",
  "toolDescription": "Open connection file browser",
  "baseUrl": "http://localhost:21721",
  "path": "/connection/browse",
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
      "directory": "directory",
      "connection": "connection"
    }
  },
  inputParamsSchema
}

export default tool