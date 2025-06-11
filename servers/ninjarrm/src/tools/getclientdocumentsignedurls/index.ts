import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getclientdocumentsignedurls",
  "toolDescription": "Get organization document signed urls",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/organization/document/{clientDocumentId}/signed-urls",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "clientDocumentId": "clientDocumentId"
    }
  },
  inputParamsSchema
}

export default tool