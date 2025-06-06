import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "page_3",
  "toolDescription": "Page of events",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/events",
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
      "fromStart": "fromStart",
      "toStart": "toStart",
      "fromEnd": "fromEnd",
      "toEnd": "toEnd",
      "page": "page",
      "size": "size",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool