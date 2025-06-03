import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_attributes_bulk_attributes_companyid_delete",
  "toolDescription": "Delete attributes bulk",
  "baseUrl": "https://api.example.com",
  "path": "/attributes/{companyId}",
  "method": "delete",
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
      "companyId": "companyId"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool