import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_10",
  "toolDescription": "List of areas",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/locations/areas/by-city/{cityId}",
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
      "cityId": "cityId"
    }
  },
  inputParamsSchema
}

export default tool