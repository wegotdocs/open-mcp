import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_lists",
  "toolDescription": "Retrieve a collection of Lists (latest version of each List)",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/lists",
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
      "criteria": "criteria",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool