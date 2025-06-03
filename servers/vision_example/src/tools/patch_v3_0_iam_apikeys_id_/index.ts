import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_v3_0_iam_apikeys_id_",
  "toolDescription": "Update API key",
  "baseUrl": "https://api.xdr.trendmicro.com",
  "path": "/v3.0/iam/apiKeys/{id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "role": "role",
      "name": "name",
      "status": "status",
      "description": "description"
    },
    "header": {
      "If-Match": "If-Match"
    }
  },
  inputParamsSchema
}

export default tool