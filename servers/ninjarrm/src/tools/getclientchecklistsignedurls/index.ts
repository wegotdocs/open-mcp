import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getclientchecklistsignedurls",
  "toolDescription": "Get organization checklist signed urls",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/organization/checklist/{checklistId}/signed-urls",
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
      "checklistId": "checklistId"
    }
  },
  inputParamsSchema
}

export default tool