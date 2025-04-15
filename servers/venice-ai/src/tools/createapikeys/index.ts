import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createapikeys",
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
      "description": "description",
      "apiKeyType": "apiKeyType",
      "expiresAt": "expiresAt",
      "consumptionLimit": "consumptionLimit"
    }
  },
  inputParamsSchema
}

export default tool