import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_queue_payments",
  "toolDescription": "Retrieve a scheduled payment list",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/queue/payments",
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
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool