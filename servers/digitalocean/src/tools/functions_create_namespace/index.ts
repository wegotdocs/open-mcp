import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "functions_create_namespace",
  "toolDescription": "Create Namespace",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/functions/namespaces",
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
      "region": "region",
      "label": "label"
    }
  },
  inputParamsSchema
}

export default tool