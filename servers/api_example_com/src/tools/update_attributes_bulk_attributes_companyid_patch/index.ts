import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_attributes_bulk_attributes_companyid_patch",
  "toolDescription": "Update attributes bulk",
  "baseUrl": "https://api.example.com",
  "path": "/attributes/{companyId}",
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
      "companyId": "companyId"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool