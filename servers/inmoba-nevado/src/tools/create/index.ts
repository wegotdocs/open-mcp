import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create",
  "toolDescription": "Create a Web Lead",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/web-leads",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "source": "source",
      "name": "name",
      "email": "email",
      "phone": "phone",
      "remoteIp": "remoteIp",
      "comments": "comments",
      "properties": "properties",
      "contact": "contact"
    }
  },
  inputParamsSchema
}

export default tool