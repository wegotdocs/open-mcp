import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createtransferresource",
  "toolDescription": "Create Transfer Resource",
  "baseUrl": "{scheme}://{baseHost}",
  "path": "/api/v1/transfer-resource",
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
      "location": "location",
      "transferId": "transferId"
    }
  },
  inputParamsSchema
}

export default tool