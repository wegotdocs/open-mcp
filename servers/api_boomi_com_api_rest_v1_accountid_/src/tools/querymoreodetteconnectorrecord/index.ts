import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "querymoreodetteconnectorrecord",
  "toolDescription": "Retrieves additional results for an ODETTEConnectorRecord query.",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ODETTEConnectorRecord/queryMore",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool