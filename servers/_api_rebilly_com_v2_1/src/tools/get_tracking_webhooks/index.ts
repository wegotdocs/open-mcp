import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tracking_webhooks",
  "toolDescription": "Retrieve a list of tracking webhook notifications",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/tracking/webhooks",
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
      "sort": "sort",
      "filter": "filter",
      "criteria": "criteria"
    }
  },
  inputParamsSchema
}

export default tool