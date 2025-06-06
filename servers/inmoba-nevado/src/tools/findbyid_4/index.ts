import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findbyid_4",
  "toolDescription": "Get property category by id",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/properties/categories/{categoryId}",
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
      "categoryId": "categoryId"
    }
  },
  inputParamsSchema
}

export default tool