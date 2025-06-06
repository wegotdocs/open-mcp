import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "processed",
  "toolDescription": "Set a WebLead as processed",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/web-leads/{webLeadId}/processed",
  "method": "put",
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
    },
    "body": {
      "contact": "contact"
    }
  },
  inputParamsSchema
}

export default tool