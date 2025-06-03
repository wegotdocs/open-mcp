import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_reconciling_source_reconcilingsources_companyid_customid_",
  "toolDescription": "Update reconciling source",
  "baseUrl": "https://api.example.com",
  "path": "/reconcilingsources/{companyId}/{customId}",
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
      "additionalInfo": "additionalInfo",
      "matchingMetadataKey": "matchingMetadataKey"
    }
  },
  inputParamsSchema
}

export default tool