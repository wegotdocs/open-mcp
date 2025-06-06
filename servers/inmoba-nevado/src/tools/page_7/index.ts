import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "page_7",
  "toolDescription": "Page of activities",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/activities",
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
      "type": "type",
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