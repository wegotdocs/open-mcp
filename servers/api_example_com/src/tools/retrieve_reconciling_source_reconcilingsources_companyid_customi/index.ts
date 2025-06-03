import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieve_reconciling_source_reconcilingsources_companyid_customi",
  "toolDescription": "Retrieve reconciling source",
  "baseUrl": "https://api.example.com",
  "path": "/reconcilingsources/{companyId}/{customId}",
  "method": "get",
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
    }
  },
  inputParamsSchema
}

export default tool