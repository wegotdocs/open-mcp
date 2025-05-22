import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "callcenters_listall",
  "toolDescription": "Call Centers -- List",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/callcenters",
  "method": "get",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "cursor": "cursor",
      "office_id": "office_id",
      "name_search": "name_search"
    }
  },
  inputParamsSchema
}

export default tool