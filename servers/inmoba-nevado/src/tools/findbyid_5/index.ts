import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findbyid_5",
  "toolDescription": "Finds a subarea by ID",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/locations/subareas/{subareaId}",
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
      "subareaId": "subareaId"
    }
  },
  inputParamsSchema
}

export default tool