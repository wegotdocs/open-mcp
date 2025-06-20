import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_audit",
  "toolDescription": "Generate an audit",
  "baseUrl": "https://mcp.open-mcp.org/api",
  "path": "/audit",
  "method": "post",
  "security": [
    {
      "key": "X-N8N-API-KEY",
      "value": "<mcp-env-var>X_N8N_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_N8N_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "additionalOptions": "additionalOptions"
    }
  },
  inputParamsSchema
}

export default tool