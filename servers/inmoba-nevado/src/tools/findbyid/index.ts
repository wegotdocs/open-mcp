import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findbyid",
  "toolDescription": "Find Web Lead by ID",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/web-leads/{webLeadId}",
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
      "webLeadId": "webLeadId"
    }
  },
  inputParamsSchema
}

export default tool