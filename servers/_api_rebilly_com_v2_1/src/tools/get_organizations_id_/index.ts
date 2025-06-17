import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_organizations_id_",
  "toolDescription": "Retrieve a organization",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/organizations/{id}",
  "method": "get",
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