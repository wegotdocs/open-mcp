import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_9",
  "toolDescription": "List of cities",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/locations/cities/by-province/{provinceId}",
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
      "provinceId": "provinceId"
    }
  },
  inputParamsSchema
}

export default tool