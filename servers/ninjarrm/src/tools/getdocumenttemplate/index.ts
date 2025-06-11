import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdocumenttemplate",
  "toolDescription": "Get document template",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/document-templates/{documentTemplateId}",
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
      "documentTemplateId": "documentTemplateId"
    },
    "query": {
      "includeTechnicianRoles": "includeTechnicianRoles"
    }
  },
  inputParamsSchema
}

export default tool