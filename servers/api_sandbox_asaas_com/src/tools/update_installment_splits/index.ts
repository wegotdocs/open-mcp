import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_installment_splits",
  "toolDescription": "Update installment splits",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/installments/{id}/splits",
  "method": "put",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "splits": "splits"
    }
  },
  inputParamsSchema
}

export default tool