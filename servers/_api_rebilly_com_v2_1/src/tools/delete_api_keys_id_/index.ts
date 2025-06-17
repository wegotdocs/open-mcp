import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_api_keys_id_",
  "toolDescription": "Delete api key",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/api-keys/{id}",
  "method": "delete",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool