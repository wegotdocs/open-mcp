import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findbyid_8",
  "toolDescription": "Finds a city by ID",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/locations/cities/{cityId}",
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