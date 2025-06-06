import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findbookingsbycontactid",
  "toolDescription": "Find booking related to a contact",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/bookings/by-contact/{contactId}",
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
      "contactId": "contactId"
    },
    "query": {
      "page": "page",
      "size": "size",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool