import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_reconciling_source_reconcilingsources_companyid_post",
  "toolDescription": "Create reconciling source",
  "baseUrl": "https://api.example.com",
  "path": "/reconcilingsources/{companyId}",
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
      "companyId": "companyId"
    },
    "body": {
      "name": "name",
      "additionalInfo": "additionalInfo",
      "matchingMetadataKey": "matchingMetadataKey",
      "customId": "customId"
    }
  },
  inputParamsSchema
}

export default tool