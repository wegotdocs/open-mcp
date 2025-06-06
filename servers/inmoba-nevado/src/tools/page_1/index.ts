import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "page_1",
  "toolDescription": "Page of sales",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/sales",
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
      "status": "status",
      "fromDateCreated": "fromDateCreated",
      "toDateCreated": "toDateCreated",
      "fromDateModified": "fromDateModified",
      "toDateModified": "toDateModified",
      "page": "page",
      "size": "size",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool