import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createapikey",
  "toolDescription": "/api/v1/api_keys",
  "baseUrl": "https://api.venice.ai/api/v1",
  "path": "/api_keys",
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
    "body": {
      "apiKeyType": "apiKeyType",
      "consumptionLimit": "consumptionLimit",
      "description": "description",
      "expiresAt": "expiresAt"
    }
  },
  inputParamsSchema
}

export default tool