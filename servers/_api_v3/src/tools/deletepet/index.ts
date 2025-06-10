import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletepet",
  "toolDescription": "Deletes a pet.",
  "baseUrl": "/api/v3",
  "path": "/pet/{petId}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "petId": "petId"
    },
    "header": {
      "api_key": "api_key"
    }
  },
  inputParamsSchema
}

export default tool