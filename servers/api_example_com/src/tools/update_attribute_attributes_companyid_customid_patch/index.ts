import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_attribute_attributes_companyid_customid_patch",
  "toolDescription": "Update attribute",
  "baseUrl": "https://api.example.com",
  "path": "/attributes/{companyId}/{customId}",
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
      "customId": "customId",
      "companyId": "companyId"
    },
    "body": {
      "name": "name",
      "active": "active",
      "values": "values"
    }
  },
  inputParamsSchema
}

export default tool