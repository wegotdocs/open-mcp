import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_websites_id_webhook",
  "toolDescription": "Create or update a webhook for website with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/websites/{id}/webhook",
  "method": "put",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "webHookUrl": "webHookUrl",
      "webHookUsername": "webHookUsername",
      "webHookPassword": "webHookPassword"
    }
  },
  inputParamsSchema
}

export default tool