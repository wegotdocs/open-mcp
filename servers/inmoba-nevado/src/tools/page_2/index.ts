import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "page_2",
  "toolDescription": "Page of properties",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/properties",
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
      "countryIso": "countryIso",
      "statusPublish": "statusPublish",
      "page": "page",
      "size": "size",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool