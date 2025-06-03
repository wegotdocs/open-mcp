import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_attribute_values_attributes_companyid_customid_values_bulk_p",
  "toolDescription": "Add values to an attribute",
  "baseUrl": "https://api.example.com",
  "path": "/attributes/{companyId}/{customId}/values/bulk",
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
    "path": {
      "customId": "customId",
      "companyId": "companyId"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool