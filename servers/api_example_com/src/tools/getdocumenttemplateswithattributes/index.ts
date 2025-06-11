import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdocumenttemplateswithattributes",
  "toolDescription": "List document templates with fields",
  "baseUrl": "https://api.example.com",
  "path": "/v2/document-templates",
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
    "query": {
      "templateName": "templateName",
      "includeTechnicianRoles": "includeTechnicianRoles"
    }
  },
  inputParamsSchema
}

export default tool