import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findbyreference",
  "toolDescription": "Finds a property by reference",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/properties/by-reference/{reference}",
  "method": "get",
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
      "reference": "reference"
    }
  },
  inputParamsSchema
}

export default tool