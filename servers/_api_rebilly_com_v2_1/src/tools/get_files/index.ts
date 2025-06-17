import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_files",
  "toolDescription": "Retrieve a list of files",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/files",
  "method": "get",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "offset": "offset",
      "filter": "filter",
      "q": "q",
      "expand": "expand",
      "fields": "fields",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool