import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "page_6",
  "toolDescription": "Page of bookings",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/bookings",
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
    "query": {
      "fromDateCreated": "fromDateCreated",
      "toDateCreated": "toDateCreated",
      "fromDateModified": "fromDateModified",
      "toDateModified": "toDateModified",
      "fromDateStart": "fromDateStart",
      "toDateStart": "toDateStart",
      "fromDateEnd": "fromDateEnd",
      "toDateEnd": "toDateEnd",
      "page": "page",
      "size": "size",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool