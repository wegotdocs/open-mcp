import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinstaller",
  "toolDescription": "Generate installer",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organization/generate-installer",
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
    "body": {
      "organizationId": "organizationId",
      "locationId": "locationId",
      "installerType": "installerType",
      "usageLimit": "usageLimit",
      "content": "content"
    }
  },
  inputParamsSchema
}

export default tool