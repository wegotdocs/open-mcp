import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createorganizationdocument",
  "toolDescription": "Create organization document",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organization/{organizationId}/template/{documentTemplateId}/document",
  "method": "post",
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
      "organizationId": "organizationId",
      "documentTemplateId": "documentTemplateId"
    },
    "body": {
      "documentName": "documentName",
      "documentDescription": "documentDescription",
      "fields": "fields"
    }
  },
  inputParamsSchema
}

export default tool